'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { getModelNames, getModelCover } from '@/lib/modelImages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ModelsPage() {
	const { t } = useLanguage();
	const modelNames = getModelNames();

	return (
		<div className="min-h-screen bg-black">
			<Header />
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-black to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />

				<div className="relative container mx-auto px-4 py-24 md:py-32">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-block mb-6">
							<span className="bg-amber-500/20 text-amber-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-amber-500/30">
								Domestic Models
							</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
							国产模型精选
						</h1>
						<p className="text-xl md:text-2xl text-gray-400 font-light">
							探索国内优秀模型作品 · 感受匠心工艺之美
						</p>
					</div>
				</div>
			</div>

			{/* Models Grid */}
			<div className="container mx-auto px-4 pb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{modelNames.map((modelName, index) => (
						<Link
							key={modelName}
							href={`/models/${encodeURIComponent(modelName)}`}
							className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-gray-800 hover:border-amber-500/50"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="relative aspect-[16/10] overflow-hidden">
								<Image
									src={getModelCover(modelName)}
									alt={modelName}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-700"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>

							<div className="absolute bottom-0 left-0 right-0 p-8">
								<div className="flex items-center gap-3 mb-3">
									<div className="w-12 h-1 bg-amber-500 rounded-full" />
									<span className="text-amber-400 text-sm font-bold uppercase tracking-wider">
										国模作品
									</span>
								</div>

								<h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
									{modelName}
								</h3>

								<div className="flex items-center gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
									<div className="flex items-center gap-2">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
										<span className="font-medium">查看详情</span>
									</div>
									<svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
}
