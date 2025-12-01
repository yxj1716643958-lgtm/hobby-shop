'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { getModelImages } from '@/lib/modelImages';
import { getModelDescription } from '@/lib/modelDescriptions';

export default function ModelDetailPage({ params }: { params: { name: string } }) {
	const modelName = decodeURIComponent(params.name);
	const { t } = useLanguage();
	const images = getModelImages(modelName);
	const description = getModelDescription(modelName);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	if (!images || images.length === 0) {
		return (
			<div className="min-h-screen bg-black flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-white mb-4">{t('noImages')}</h1>
					<Link href="/models" className="text-amber-400 hover:text-amber-300">
						{t('back')}
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black">
			{/* Header */}
			<div className="sticky top-24 lg:top-28 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link
							href="/models"
							className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition group"
						>
							<svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
							<span className="font-medium">{t('back')}</span>
						</Link>

						<h1 className="text-xl md:text-2xl font-bold text-white">
							{modelName}
						</h1>

						<div className="text-sm text-gray-400">
							{images.length} {t('page')}
						</div>
					</div>
				</div>
			</div>

			{/* Description */}
			{description && (
				<div className="container mx-auto px-4 py-8">
					<div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
						<h2 className="text-2xl font-bold text-amber-400 mb-4">作品介绍</h2>
						<div className="text-gray-300 leading-relaxed whitespace-pre-line">
							{description}
						</div>
					</div>
				</div>
			)}

			{/* Images Grid */}
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{images.map((image, index) => (
						<div
							key={index}
							className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:ring-4 hover:ring-amber-400 transition-all"
							onClick={() => setSelectedImage(image)}
						>
							<div className="relative aspect-[3/4]">
								<Image
									src={image}
									alt={`${modelName} - ${index + 1}`}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

								{/* Page Number */}
								<div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
									{index + 1}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Lightbox */}
			{selectedImage && (
				<div
					className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
					onClick={() => setSelectedImage(null)}
				>
					<button
						className="absolute top-4 right-4 text-white hover:text-amber-400 transition p-2"
						onClick={() => setSelectedImage(null)}
					>
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<div className="relative max-w-7xl max-h-[90vh] w-full h-full">
						<Image
							src={selectedImage}
							alt="Preview"
							fill
							className="object-contain"
							sizes="100vw"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
