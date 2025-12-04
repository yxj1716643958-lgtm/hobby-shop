"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 px-3 py-1 text-sm font-bold">上线了</div>
          <span className="text-sm text-gray-400">专业版</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#home" className="hover:text-purple-400 transition">{t.nav.home}</a>
          <a href="#news" className="hover:text-purple-400 transition">{t.nav.news}</a>
          <a href="#company" className="hover:text-purple-400 transition">{t.nav.company}</a>
          <a href="#games" className="hover:text-purple-400 transition">{t.nav.games}</a>
          <a href="#works" className="hover:text-purple-400 transition">{t.nav.works}</a>
          <a href="#system" className="hover:text-purple-400 transition">{t.nav.system}</a>
          <a href="#download" className="hover:text-purple-400 transition">{t.nav.download}</a>
          <a href="#recruit" className="hover:text-purple-400 transition">{t.nav.recruit}</a>

          <div className="flex gap-2 ml-4 border-l border-gray-600 pl-4">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-2 py-1 ${language === 'zh' ? 'text-purple-400 font-bold' : 'text-gray-400'}`}
            >
              中文
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setLanguage('ja')}
              className={`px-2 py-1 ${language === 'ja' ? 'text-purple-400 font-bold' : 'text-gray-400'}`}
            >
              日本語
            </button>
          </div>
        </nav>

        <button className="hidden md:block bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-200 transition">
          管理网站
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <nav className="flex flex-col p-6 gap-4 text-sm">
            <a href="#home" className="hover:text-purple-400">{t.nav.home}</a>
            <a href="#news" className="hover:text-purple-400">{t.nav.news}</a>
            <a href="#company" className="hover:text-purple-400">{t.nav.company}</a>
            <a href="#games" className="hover:text-purple-400">{t.nav.games}</a>
            <a href="#works" className="hover:text-purple-400">{t.nav.works}</a>
            <a href="#system" className="hover:text-purple-400">{t.nav.system}</a>
            <a href="#download" className="hover:text-purple-400">{t.nav.download}</a>
            <a href="#recruit" className="hover:text-purple-400">{t.nav.recruit}</a>

            <div className="flex gap-2 pt-4 border-t border-gray-800">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-2 py-1 ${language === 'zh' ? 'text-purple-400 font-bold' : 'text-gray-400'}`}
              >
                中文
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLanguage('ja')}
                className={`px-2 py-1 ${language === 'ja' ? 'text-purple-400 font-bold' : 'text-gray-400'}`}
              >
                日本語
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
