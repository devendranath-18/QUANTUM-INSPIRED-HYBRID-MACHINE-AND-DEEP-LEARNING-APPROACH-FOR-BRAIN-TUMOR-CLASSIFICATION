"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDrop = (acceptedFiles: File[]) => {
    const f = acceptedFiles[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    router.push(`/result?prediction=${data.prediction}&confidence=${data.confidence}`);
  };

  return (
    <div className="min-h-screen flex bg-[#0f172a] text-white">

      {/* LEFT PANEL */}
      <div className="w-1/2 flex items-center justify-center">
        <motion.div
          {...getRootProps()}
          className="border-2 border-dashed border-white/20 p-10 rounded-xl cursor-pointer hover:border-blue-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          <input {...getInputProps()} />
          <div className="text-center">
            <UploadCloud size={40} />
            <p className="mt-2 text-sm text-white/70">
              Drag & drop MRI or click
            </p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 flex flex-col items-center justify-center">

        {preview ? (
          <motion.img
            src={preview}
            className="w-[300px] rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        ) : (
          <p className="text-white/40">No image selected</p>
        )}

        <button
          onClick={handleUpload}
          className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  );
}