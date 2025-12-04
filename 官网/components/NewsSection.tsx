"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsSection() {
  const { language } = useLanguage();

  const newsTitle = {
    zh: "最新动态",
    ja: "最新ニュース"
  };

  const news = [
    {
      id: 1,
      title: {
        zh: "《驭灵师》PVE正式公布",
        ja: "《驭灵師》PVE正式発表"
      },
      date: "2024.12.02",
      image: "/news1.jpg"
    },
    {
      id: 2,
      title: {
        zh: "新版本更新预告",
        ja: "新バージョン更新予告"
      },
      date: "2024.11.28",
      image: "/news2.jpg"
    },
    {
      id: 3,
      title: {
        zh: "游戏活动开启",
        ja: "ゲームイベント開始"
      },
      date: "2024.11.20",
      image: "/news3.jpg"
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-red-600">
          {newsTitle[language]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-emerald-600 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-lg font-medium group-hover:text-purple-600 transition">
                {item.title[language]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
