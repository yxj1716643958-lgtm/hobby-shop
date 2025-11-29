'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
	const { t } = useLanguage();

	return (
		<section className="relative bg-black text-white overflow-hidden">
			<div className="w-full flex flex-col lg:flex-row min-h-[600px] lg:min-h-[650px]">
				{/* Left Content - Black Background - 40% Width */}
				<div className="w-full lg:w-[40%] flex items-center justify-center px-8 lg:px-16 py-20 bg-black">
					<div className="max-w-xl text-center">
						<div className="inline-block mb-6">
							<span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
								New release!
							</span>
						</div>
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white">
							{t('heroTitle')}
						</h1>
						<p className="text-2xl md:text-3xl mb-8 text-white font-light">
							{t('heroSubtitle')}
						</p>
						<p className="text-base md:text-lg text-blue-200 mb-10 leading-relaxed">
							{t('heroDescription')}
						</p>
						<div className="flex gap-4 justify-center">
							<a
								href="#magazines"
								className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-md text-base transition transform hover:scale-105 shadow-lg inline-block"
							>
								View Details
							</a>
						</div>
					</div>
				</div>

				{/* Right Image - Black Background - 60% Width */}
				<div className="w-full lg:w-[60%] relative bg-black flex items-center justify-start overflow-hidden">
					<img
						src="/magazines/10th-anniversary/10010.png"
						alt="Gundam RXF91 - Model Workshop"
						className="w-full h-full object-contain object-left lg:-ml-20"
						onError={(e) => {
							e.currentTarget.src = '/magazines/10th-anniversary/F91-cover.jpg';
						}}
					/>
				</div>
			</div>
		</section>
	);
}
