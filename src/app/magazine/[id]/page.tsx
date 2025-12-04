'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

const magazinesData = [
	{
		id: 1,
		nameKey: 'anniversary10th',
		descKey: 'anniversary10thDesc',
		category: 'special',
		fullDescription: `模工坊十周年纪念特辑，收录中国顶尖模型师的精选作品。

特别企划：
• 50+位中国模型师作品
• 制作心得与技法分享
• 十年发展历程回顾
• 独家访谈与幕后故事

见证中国模型制作水平的崛起，感受匠人精神的传承。这是一本记录中国模型发展史的珍贵资料。`,
		coverImage: '/magazines/10th-anniversary/封面封底-01.jpg',
	},
	{
		id: 2,
		nameKey: 'monthly2024',
		descKey: 'monthly2024Desc',
		category: 'monthly',
		fullDescription: `2024年全年度模工坊月刊合集。

年度精选：
• 12期月刊完整收录
• 年度最佳作品评选
• 新品模型测评
• 制作技法连载
• 模型展会报道

记录2024年模型界的精彩瞬间，汇集全年最优秀的作品与教程。`,
		coverImage: 'https://moxing12311.oss-cn-beijing.aliyuncs.com/%E6%A8%A1%E5%B7%A5%E5%9D%8A%E6%9C%88%E5%88%8A2024/1/000.jpg',
		issues: ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12'],
	},
	{
		id: 3,
		nameKey: 'monthly2025',
		descKey: 'monthly2025Desc',
		category: 'monthly',
		fullDescription: `2025年最新模工坊月刊合集。

最新内容：
• 最新期刊持续更新
• 前沿制作技术介绍
• 新品首发评测
• 大师访谈专栏
• 读者作品展示

紧跟模型界最新动态，第一时间了解新品资讯和制作技巧。`,
		coverImage: '/magazines/2025/01/001.jpg',
		issues: ['01', '02', '03', '04', '05', '06'],
	},
];

export default function MagazineDetail() {
	const params = useParams();
	const router = useRouter();
	const { t } = useLanguage();
	const id = parseInt(params.id as string);
	const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
	const [images, setImages] = useState<string[]>([]);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const magazine = magazinesData.find(m => m.id === id);

	useEffect(() => {
		if (magazine && magazine.issues && magazine.issues.length > 0 && !selectedIssue) {
			setSelectedIssue(magazine.issues[0]);
		}
	}, [magazine, selectedIssue]);

	useEffect(() => {
		const fetchImages = async () => {
			if (!magazine) return;

			setLoading(true);
			try {
				const params = new URLSearchParams({
					magazine: id.toString(),
				});

				if (selectedIssue && magazine.issues) {
					params.append('issue', selectedIssue);
				}

				const response = await fetch(`/api/images?${params}`);
				const data = await response.json();

				if (data.images) {
					setImages(data.images);
				}
			} catch (error) {
				console.error('Failed to fetch images:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchImages();
	}, [id, selectedIssue, magazine]);

	if (!magazine) {
		return (
			<div className="min-h-screen bg-gray-900">
				<Header />
				<div className="container mx-auto px-4 py-20 text-center">
					<h1 className="text-3xl font-bold mb-4 text-white">Magazine Not Found</h1>
					<button
						onClick={() => router.push('/')}
						className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700"
					>
						{t('back')}
					</button>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-900">
			<Header />

			{/* Hero Section with Magazine Info */}
			<section className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white py-16 border-b-4 border-cyan-500">
				<div className="container mx-auto px-4">
					<button
						onClick={() => router.back()}
						className="mb-8 text-gray-300 hover:text-cyan-400 flex items-center gap-2 font-medium transition group"
					>
						<svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						{t('back')}
					</button>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left: Text Content */}
						<div>
							<span className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-full text-sm mb-6 font-bold uppercase tracking-wide">
								{t(magazine.category as any)}
							</span>
							<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
								{t(magazine.nameKey as any)}
							</h1>
							<p className="text-xl text-gray-300 mb-8">
								{t(magazine.descKey as any)}
							</p>

							<div className="prose prose-invert max-w-none mb-8">
								<div className="whitespace-pre-line text-gray-300 leading-relaxed">
									{magazine.fullDescription}
								</div>
							</div>

							{magazine.issues && magazine.issues.length > 0 && (
								<div className="mb-8">
									<h3 className="font-bold text-lg mb-4 text-cyan-400">{t('selectIssue')}</h3>
									<div className="flex flex-wrap gap-3">
										{magazine.issues.map((issue) => (
											<button
												key={issue}
												onClick={() => setSelectedIssue(issue)}
												className={`px-6 py-3 rounded-lg font-medium transition transform hover:scale-105 ${
													selectedIssue === issue
														? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/50'
														: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
												}`}
											>
												{t('issue')} {issue}
											</button>
										))}
									</div>
								</div>
							)}

							<button
								onClick={() => {
									const element = document.getElementById('content-section');
									element?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-xl"
							>
								View Details
							</button>
						</div>

						{/* Right: Magazine Cover */}
						<div className="relative">
							<div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
								<img
									src={
										selectedIssue && magazine.id === 2
											? `https://moxing12311.oss-cn-beijing.aliyuncs.com/%E6%A8%A1%E5%B7%A5%E5%9D%8A%E6%9C%88%E5%88%8A2024/${selectedIssue}/000.jpg`
											: selectedIssue && magazine.id === 3
											? `https://moxing12311.oss-cn-beijing.aliyuncs.com/%E6%A8%A1%E5%B7%A5%E5%9D%8A%E6%9C%88%E5%88%8A2025/${selectedIssue}/000.jpg`
											: magazine.coverImage
									}
									alt={t(magazine.nameKey as any)}
									className="w-full h-auto"
									onError={(e) => {
										e.currentTarget.src = 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600';
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
							</div>
							{/* Decorative Elements */}
							<div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
							<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section id="content-section" className="py-16 bg-gray-900">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							{selectedIssue ? `${t('issue')} ${selectedIssue} - ${t('contentPreview')}` : t('contentPreview')}
						</h2>
						<div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
					</div>

					{loading ? (
						<div className="text-center py-20">
							<div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-500"></div>
							<p className="mt-6 text-gray-400 text-lg">{t('loading')}</p>
						</div>
					) : images.length > 0 ? (
						<div className="max-w-5xl mx-auto">
							<div className="grid grid-cols-1 gap-8">
								{images.map((img, index) => (
									<div
										key={index}
										className="cursor-pointer group"
										onClick={() => setSelectedImage(img)}
									>
										<div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 transform hover:scale-[1.02] transition duration-500">
											<img
												src={img}
												alt={`${t('page')} ${index + 1}`}
												className="w-full h-auto"
												loading="lazy"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
													<p className="text-sm font-medium flex items-center gap-2">
														<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
														</svg>
														Click to view full size
													</p>
												</div>
											</div>
										</div>
										<p className="text-center text-gray-500 text-sm mt-3">
											{t('page')} {index + 1}
										</p>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="bg-gray-800 rounded-2xl p-16 text-center max-w-2xl mx-auto">
							<svg className="w-32 h-32 mx-auto text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<p className="text-gray-400 text-lg">{t('noImages')}</p>
						</div>
					)}
				</div>
			</section>

			{/* Image Preview Modal */}
			{selectedImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
					onClick={() => setSelectedImage(null)}
				>
					<button
						className="absolute top-6 right-6 text-white hover:text-cyan-400 z-10 transition"
						onClick={() => setSelectedImage(null)}
					>
						<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<img
						src={selectedImage}
						alt="Preview"
						className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			)}

			<Footer />
		</div>
	);
}
