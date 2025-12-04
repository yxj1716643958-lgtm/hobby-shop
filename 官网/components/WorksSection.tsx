"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function WorksSection() {
  const { t } = useLanguage();

  const works = [
    { id: 1, title: "作品タイトル 1", year: "2024", image: "/placeholder1.jpg" },
    { id: 2, title: "作品タイトル 2", year: "2024", image: "/placeholder2.jpg" },
    { id: 3, title: "作品タイトル 3", year: "2023", image: "/placeholder3.jpg" },
    { id: 4, title: "作品タイトル 4", year: "2023", image: "/placeholder4.jpg" },
    { id: 5, title: "作品タイトル 5", year: "2023", image: "/placeholder5.jpg" },
    { id: 6, title: "作品タイトル 6", year: "2022", image: "/placeholder6.jpg" },
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">{t.works.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-200 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-lg font-medium mb-1">{work.title}</h3>
              <p className="text-sm text-gray-600">{work.year}{t.works.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition">
            {t.works.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
