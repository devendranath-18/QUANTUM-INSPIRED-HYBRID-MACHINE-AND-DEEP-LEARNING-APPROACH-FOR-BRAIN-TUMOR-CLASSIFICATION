import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Brain Tumor Detection",
  description: "AI-powered MRI analysis system",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <div className="pt-20 px-4">
          {children}
        </div>

      </body>
    </html>
  );
}