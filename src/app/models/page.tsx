'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { getModelNames, getModelCover } from '@/lib/modelImages';

export default function ModelsPage() {
	const { t } = useLanguage();
	const modelNames = getModelNames();

	return (
		<div className="min-h-screen bg-black">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-b from-gray-900 to-black py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-black text-white mb-4 text-center">
						{t('domesticModels')}
					</h1>
					<p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
						国产模型作品精选集
					</p>
				</div>
			</div>

			{/* Models Grid */}
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
			</div>
		</div>
	);
}
