'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { getModelImages } from '@/lib/modelImages';
import { getModelDescriptions } from '@/lib/modelDescriptions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ModelDetailPage({ params }: { params: { name: string } }) {
	const modelName = decodeURIComponent(params.name);
	const { t } = useLanguage();
	const images = getModelImages(modelName);
	const descriptions = getModelDescriptions(modelName);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	if (!images || images.length === 0) {
		return (
			<div className="min-h-screen bg-black">
				<Header />
				<div className="flex items-center justify-center py-20">
					<div className="text-center">
						<h1 className="text-3xl font-bold text-white mb-4">{t('noImages')}</h1>
						<Link href="/" className="text-amber-400 hover:text-amber-300">
							{t('back')}
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black">
			<Header />
			{/* Header */}
			<div className="sticky top-24 lg:top-28 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link
							href="/"
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

			{/* Images with Descriptions */}
			<div className="container mx-auto px-4 py-8">
				<div className="max-w-5xl mx-auto space-y-12">
					{images.map((image, index) => (
						<div
							key={index}
							className="bg-gray-900 rounded-2xl overflow-hidden hover:ring-2 hover:ring-amber-400 transition-all"
						>
							{/* Image */}
							<div
								className="relative aspect-[16/9] cursor-pointer group"
								onClick={() => setSelectedImage(image)}
							>
								<Image
									src={image}
									alt={`${modelName} - ${index + 1}`}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
									sizes="(max-width: 1200px) 100vw, 1200px"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

								{/* Page Number */}
								<div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
									{index + 1} / {images.length}
								</div>

								{/* Zoom Icon */}
								<div className="absolute bottom-4 right-4 bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
									</svg>
								</div>
							</div>

							{/* Description */}
							{descriptions[index] && (
								<div className="p-6 md:p-8 bg-gradient-to-b from-gray-900 to-black">
									<p className="text-gray-200 leading-relaxed text-base md:text-lg font-light tracking-wide">
										{descriptions[index]}
									</p>
								</div>
							)}
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

			<Footer />
		</div>
	);
}
