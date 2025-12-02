'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { getModelNames, getModelCover } from '@/lib/modelImages';

export default function ModelGrid() {
	const { t } = useLanguage();
	const modelNames = getModelNames();

	return (
		<section className="relative py-32 bg-black overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

			<div className="relative container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-3 mb-6">
						<div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
						<span className="text-amber-500 text-sm font-bold uppercase tracking-[0.3em]">
							{t('domesticModels')}
						</span>
						<div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
					</div>

					<h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
						{t('modelTitle')}
						<span className="block text-3xl md:text-4xl font-light text-gray-400 mt-4">
							{t('modelSubtitle')}
						</span>
					</h2>

					<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
						{t('modelDescription')}
					</p>
				</div>

				{/* Featured Model - Large Card */}
				{modelNames.length > 0 && (
					<Link
						href={`/models/${encodeURIComponent(modelNames[0])}`}
						className="group block mb-12 max-w-6xl mx-auto"
					>
						<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
							<div className="relative aspect-[21/9] overflow-hidden">
								<Image
									src={getModelCover(modelNames[0])}
									alt={modelNames[0]}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-700"
									sizes="(max-width: 1200px) 100vw, 1200px"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

								{/* Featured Badge */}
								<div className="absolute top-8 right-8 bg-amber-500 text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider shadow-lg">
									{t('featuredModel')}
								</div>
							</div>

							<div className="absolute inset-0 flex items-center">
								<div className="p-12 md:p-16 max-w-2xl">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-16 h-1 bg-amber-500 rounded-full" />
										<span className="text-amber-400 text-sm font-bold uppercase tracking-wider">
											Featured
										</span>
									</div>

									<h3 className="text-4xl md:text-6xl font-black text-white mb-6 group-hover:text-amber-400 transition-colors duration-300">
										{modelNames[0]}
									</h3>

									<div className="flex items-center gap-4 text-gray-300">
										<span className="text-lg font-medium">{t('exploreWork')}</span>
										<svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</Link>
				)}

				{/* Other Models Grid */}
				{modelNames.length > 1 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{modelNames.slice(1).map((modelName, index) => (
							<Link
								key={modelName}
								href={`/models/${encodeURIComponent(modelName)}`}
								className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="relative aspect-[3/4] overflow-hidden">
									<Image
										src={getModelCover(modelName)}
										alt={modelName}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

									{/* Hover Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								</div>

								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="w-8 h-0.5 bg-amber-500 rounded-full mb-3 group-hover:w-full transition-all duration-500" />

									<h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
										{modelName}
									</h3>

									<div className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
										<span>{t('viewDetails')}</span>
										<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}

				{/* View All Button */}
				<div className="text-center mt-16">
					<Link
						href="/models"
						className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
					>
						<span className="text-lg">{t('viewAllModels')}</span>
						<svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
