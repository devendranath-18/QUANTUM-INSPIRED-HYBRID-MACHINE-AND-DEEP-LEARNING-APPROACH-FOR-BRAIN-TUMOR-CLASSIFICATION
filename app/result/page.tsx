"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function ResultPage() {
  const params = useSearchParams();

  const prediction = params.get("prediction");
  const confidence = Number(params.get("confidence"));

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center">

      <motion.div
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[400px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          AI Diagnosis
        </h1>

        {/* Prediction */}
        <p className="text-center text-xl text-blue-400">
          {prediction}
        </p>

        {/* Circular Progress */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full">
              <circle
                cx="64"
                cy="64"
                r="50"
                stroke="#1e293b"
                strokeWidth="10"
                fill="none"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="50"
                stroke="#22c55e"
                strokeWidth="10"
                fill="none"
                strokeDasharray="314"
                strokeDashoffset={314 - (confidence / 100) * 314}
                initial={{ strokeDashoffset: 314 }}
                animate={{
                  strokeDashoffset: 314 - (confidence / 100) * 314,
                }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              {confidence}%
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}