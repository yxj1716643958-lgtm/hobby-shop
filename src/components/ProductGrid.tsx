'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

const magazines = [
	{
		id: 1,
		nameKey: 'anniversary10th',
		descKey: 'anniversary10thDesc',
		category: 'special',
		image: '/magazines/10th-anniversary/086.jpg',
		fallbackImage: '/magazines/10th-anniversary/封面封底-01.jpg',
	},
	{
		id: 2,
		nameKey: 'monthly2024',
		descKey: 'monthly2024Desc',
		category: 'monthly',
		image: '/magazines/10th-anniversary/092.jpg',
		fallbackImage: '/magazines/2024/1/001.jpg',
	},
	{
		id: 3,
		nameKey: 'monthly2025',
		descKey: 'monthly2025Desc',
		category: 'monthly',
		image: '/magazines/10th-anniversary/241.jpg',
		fallbackImage: '/magazines/2025/01/001.jpg',
	},
];

export default function ProductGrid() {
	const router = useRouter();
	const { t } = useLanguage();

	const handleViewDetail = (id: number) => {
		router.push(`/magazine/${id}`);
	};

	return (
		<section id="magazines" className="py-20 bg-black">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
						{t('magazineLibrary')}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						{t('heroDescription')}
					</p>
				</div>

				{/* Filter Buttons */}
				<div className="mb-12 flex justify-center gap-4 flex-wrap">
					<button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
						{t('all')}
					</button>
					<button className="px-8 py-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition font-medium shadow-md border-2 border-gray-700">
						{t('special')}
					</button>
					<button className="px-8 py-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition font-medium shadow-md border-2 border-gray-700">
						{t('monthly')}
					</button>
				</div>

				{/* Magazine Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{magazines.map((magazine) => (
						<div
							key={magazine.id}
							className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
							onClick={() => handleViewDetail(magazine.id)}
						>
							{/* Image Container */}
							<div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
								<img
									src={magazine.image}
									alt={t(magazine.nameKey as any)}
									className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
									onError={(e) => {
										e.currentTarget.src = magazine.fallbackImage;
									}}
								/>
								{/* Overlay on Hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
										<p className="text-sm font-medium">Click to view details →</p>
									</div>
								</div>
								{/* Category Badge */}
								<span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
									{t(magazine.category as any)}
								</span>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition line-clamp-2 min-h-[3.5rem]">
									{t(magazine.nameKey as any)}
								</h3>
								<p className="text-sm text-gray-600 mb-4 line-clamp-2">
									{t(magazine.descKey as any)}
								</p>
								<div className="flex items-center text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
									<span>View Details</span>
									<svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-16">
					<p className="text-gray-400 mb-6 text-lg">
						Discover more amazing content from Model Workshop
					</p>
					<a
						href="#magazines"
						className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 shadow-xl"
					>
						Explore All Issues
					</a>
				</div>
			</div>
		</section>
	);
}
