"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, HeartPulse, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-20">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* 🧠 Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Our AI System
        </motion.h1>

        <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
          A deep learning-powered system designed to assist in detecting brain tumors from MRI scans with high accuracy.
        </p>

        {/* ⚡ Sections */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Mission */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <HeartPulse className="text-red-400" size={30} />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="text-white/60 mt-2">
              To assist medical professionals with AI-based tools for early and accurate tumor detection.
            </p>
          </motion.div>

          {/* Technology */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Cpu className="text-blue-400" size={30} />
            <h3 className="mt-4 text-xl font-semibold">Technology</h3>
            <p className="text-white/60 mt-2">
              Built using MobileNetV2, TensorFlow, Flask API, and Next.js frontend.
            </p>
          </motion.div>

          {/* AI Model */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="text-purple-400" size={30} />
            <h3 className="mt-4 text-xl font-semibold">AI Model</h3>
            <p className="text-white/60 mt-2">
              Trained on MRI datasets to classify glioma, meningioma, pituitary, and normal cases.
            </p>
          </motion.div>

        </div>

        {/* 👨‍💻 Developer Section */}
        <motion.div
          className="mt-16 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Code className="mx-auto text-green-400" size={30} />

          <h2 className="text-2xl font-bold mt-4">Developer</h2>

          <p className="text-white/70 mt-2">
            This project is developed as part of a B.Tech Computer Science initiative focusing on AI in healthcare.
          </p>

          <p className="mt-4 text-white/50">
            Developed by: <span className="text-white">Your Name</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}