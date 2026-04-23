"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-md z-50">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-700">
        🧠 BrainAI
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link
          href="/"
          className={path === "/" ? "text-blue-600 font-semibold" : ""}
        >
          Home
        </Link>

        <Link
          href="/upload"
          className={path === "/upload" ? "text-blue-600 font-semibold" : ""}
        >
          Upload
        </Link>

        <Link
          href="/about"
          className={path === "/about" ? "text-blue-600 font-semibold" : ""}
        >
          About
        </Link>
      </div>
    </div>
  );
}