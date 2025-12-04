"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 px-3 py-1 text-sm font-bold">上线了</div>
              <span className="text-sm text-gray-400">专业版</span>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t.nav.games}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">驭灵师</a></li>
              <li><a href="#" className="hover:text-white">其他游戏</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">{t.footer.about}</a></li>
              <li><a href="#" className="hover:text-white">{t.footer.recruit}</a></li>
              <li><a href="#" className="hover:text-white">{t.footer.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t.footer.followUs}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">微信</a></li>
              <li><a href="#" className="hover:text-white">微博</a></li>
              <li><a href="#" className="hover:text-white">B站</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 上线了. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
