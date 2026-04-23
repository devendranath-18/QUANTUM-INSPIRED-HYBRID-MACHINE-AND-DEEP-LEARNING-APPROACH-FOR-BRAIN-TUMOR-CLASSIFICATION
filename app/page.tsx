"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Activity, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] bottom-[-100px] right-[-100px]" />

      {/* 🧠 Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6">

        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AI-Powered <span className="text-blue-400">Brain Tumor</span> Detection
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-white/70 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Upload MRI scans and get instant, intelligent diagnosis with deep learning models.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href="/upload">
            <button className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>

          <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>

      </div>

      {/* ⚡ Features Section */}
      <div className="relative z-10 px-6 pb-20 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <motion.div
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          whileHover={{ y: -5 }}
        >
          <Brain className="text-blue-400" size={30} />
          <h3 className="mt-4 text-xl font-semibold">Deep Learning Model</h3>
          <p className="text-white/60 mt-2">
            MobileNet-based architecture trained on MRI datasets.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          whileHover={{ y: -5 }}
        >
          <Activity className="text-green-400" size={30} />
          <h3 className="mt-4 text-xl font-semibold">Instant Analysis</h3>
          <p className="text-white/60 mt-2">
            Get predictions and confidence scores in seconds.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          whileHover={{ y: -5 }}
        >
          <ShieldCheck className="text-purple-400" size={30} />
          <h3 className="mt-4 text-xl font-semibold">Medical Assistance</h3>
          <p className="text-white/60 mt-2">
            AI-assisted diagnosis for better clinical decisions.
          </p>
        </motion.div>

      </div>

      {/* 🚀 Footer CTA */}
      <div className="text-center pb-16">
        <p className="text-white/50 mb-4">Start analyzing MRI scans now</p>

        <Link href="/upload">
          <button className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
            Upload MRI
          </button>
        </Link>
      </div>

    </div>
  );
}