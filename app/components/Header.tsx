"use client";

import { useApp } from "../context/AppContext";
import Image from "next/image";

export default function Header() {
  const { language, setLanguage, darkMode, toggleDarkMode } = useApp();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logos */}
        <div className="flex items-center gap-3 md:gap-4">
          <Image 
            src="/FPTSoftware.jpg" 
            alt="FPT Software"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <Image 
            src="/FPTU.jpg" 
            alt="FPTU"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <Image 
            src="/FIC.jpg" 
            alt="FIC"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <span className="hidden md:inline-block font-script text-xl md:text-2xl text-gray-800 dark:text-gray-100 ml-2">YEP 2025</span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Selector */}
          <div className="flex gap-1 md:gap-2">
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2 md:px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                language === "vi"
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
              }`}
              aria-label="Switch to Vietnamese"
            >
              <span className="hidden sm:inline">🇻🇳 VI</span>
              <span className="sm:hidden">🇻🇳</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 md:px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
              }`}
              aria-label="Switch to English"
            >
              <span className="hidden sm:inline">🇬🇧 EN</span>
              <span className="sm:hidden">🇬🇧</span>
            </button>
            <button
              onClick={() => setLanguage("ja")}
              className={`px-2 md:px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                language === "ja"
                  ? "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
              }`}
              aria-label="Switch to Japanese"
            >
              <span className="hidden sm:inline">🇯🇵 JA</span>
              <span className="sm:hidden">🇯🇵</span>
            </button>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-xl">☀️</span>
            ) : (
              <span className="text-xl">🌙</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
