"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Logo */}
          <Link href="/" className="text-blue-600 text-4xl font-bold">
            JobNest
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-around w-full sm:w-auto items-center gap-4 sm:gap-6 font-semibold sm:text-lg">
            <Link href="/home" className="text-gray-400 hover:text-blue-600">
              Home
            </Link>
            <Link href="/post-job" className="text-gray-400 hover:text-blue-600">
              Post a Job
            </Link>
            <Link href="/login" className="text-gray-400 hover:text-blue-600">
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}