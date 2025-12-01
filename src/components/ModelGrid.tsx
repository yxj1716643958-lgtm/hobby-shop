'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { getModelNames, getModelCover } from '@/lib/modelImages';

export default function ModelGrid() {
	const { t } = useLanguage();
	const modelNames = getModelNames();

	return (
		<section className="py-20 bg-black">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-black text-white mb-4">
						{t('domesticModels')}
					</h2>
					<p className="text-gray-400 text-lg">
						国产模型作品精选集
					</p>
				</div>

				{/* Models Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{modelNames.map((modelName) => (
						<Link
							key={modelName}
							href={`/models/${encodeURIComponent(modelName)}`}
							className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:ring-4 hover:ring-amber-400 transition-all duration-300 hover:scale-105"
						>
							<div className="relative aspect-[3/4] overflow-hidden">
								<Image
									src={getModelCover(modelName)}
									alt={modelName}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

								{/* Badge */}
								<div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
									国模
								</div>
							</div>

							<div className="absolute bottom-0 left-0 right-0 p-6">
								<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
									{modelName}
								</h3>
								<div className="flex items-center text-gray-400 text-sm">
									<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<span>查看作品</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-12">
					<Link
						href="/models"
						className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
					>
						<span>查看全部国模</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
