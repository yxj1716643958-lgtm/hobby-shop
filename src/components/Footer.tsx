'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="bg-gray-900 text-white">
			{/* Main Footer */}
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-6 mb-8">
							<div className="relative group">
								{/* Outer Glow */}
								<div className="absolute -inset-3 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>

								{/* Main Logo Container */}
								<div className="relative">
									{/* Background Layer */}
									<div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-2xl"></div>

									{/* Border Glow */}
									<div className="absolute inset-0 rounded-2xl border-2 border-amber-400/40 shadow-[0_0_30px_rgba(251,191,36,0.4)]"></div>

									{/* Content */}
									<div className="relative px-8 py-4 flex items-center justify-center">
										<span className="relative z-10 font-black text-3xl tracking-wider bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
											模工坊
										</span>

										{/* Shine Effect */}
										<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									</div>

									{/* Top Accent Line */}
									<div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

									{/* Bottom Accent Line */}
									<div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
								</div>

								{/* Decorative Corner Elements */}
								<div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-amber-400 rounded-tr-lg"></div>
								<div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-amber-400 rounded-bl-lg"></div>
							</div>

							<div>
								<p className="text-amber-400 text-base font-bold tracking-[0.2em] uppercase mb-1">Magazine Library</p>
								<div className="h-px bg-gradient-to-r from-amber-400 via-amber-400/50 to-transparent"></div>
							</div>
						</div>
						<p className="text-gray-400 mb-4 max-w-md leading-relaxed">
							{t('footerDesc')}
						</p>
						<p className="text-gray-500 text-sm">
							{t('footerSource')}
						</p>

						{/* Social Links */}
						<div className="flex gap-4 mt-6">
							<a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
								</svg>
							</a>
						</div>
					</div>

					{/* Categories */}
					<div>
						<h4 className="font-bold mb-6 text-lg text-amber-400 uppercase tracking-wide">{t('categories')}</h4>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2 group">
									<span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all"></span>
									{t('anniversary')}
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2 group">
									<span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all"></span>
									{t('monthly2024')}
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-amber-400 transition flex items-center gap-2 group">
									<span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all"></span>
									{t('monthly2025')}
								</Link>
							</li>
						</ul>
					</div>

					{/* About */}
					<div>
						<h4 className="font-bold mb-6 text-lg text-amber-400 uppercase tracking-wide">{t('about')}</h4>
						<ul className="space-y-3 text-gray-400 text-sm">
							<li className="flex items-start gap-2">
								<svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
								<span>3 {t('magazineLibrary')}</span>
							</li>
							<li className="flex items-start gap-2">
								<svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
								<span>18 {t('monthly')}</span>
							</li>
							<li className="flex items-start gap-2">
								<svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
								<span>{t('anniversary10thDesc')}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm text-center md:text-left">
							&copy; 2024 {t('copyright')}
						</p>
						<div className="flex gap-6 text-sm">
							<Link href="#" className="text-gray-400 hover:text-amber-400 transition">
								Privacy Policy
							</Link>
							<Link href="#" className="text-gray-400 hover:text-amber-400 transition">
								Terms of Service
							</Link>
							<Link href="#" className="text-gray-400 hover:text-amber-400 transition">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
