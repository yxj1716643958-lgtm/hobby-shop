'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';
import Link from 'next/link';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);
	const { language, setLanguage, t } = useLanguage();

	const languages: { code: Language; name: string; flag: string }[] = [
		{ code: 'zh', name: '中文', flag: '🇨🇳' },
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
		{ code: 'ja', name: '日本語', flag: '🇯🇵' },
	];

	const currentLang = languages.find(l => l.code === language) || languages[0];

	return (
		<header className="bg-black text-white shadow-2xl sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-24 lg:h-28">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-4 group">
						<div className="bg-red-600 rounded-2xl px-8 py-4">
							<span className="font-black text-3xl tracking-wide text-white">
								模工坊
							</span>
						</div>

						<div className="hidden md:block">
							<p className="text-sm text-amber-400 font-bold tracking-[0.3em] uppercase whitespace-nowrap">Magazine Library</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/" className="text-gray-300 hover:text-amber-400 transition font-medium text-sm uppercase tracking-wide">
							{t('allMagazines')}
						</Link>
						<Link href="#" className="text-gray-300 hover:text-amber-400 transition font-medium text-sm uppercase tracking-wide">
							{t('anniversary')}
						</Link>
						<Link href="#" className="text-gray-300 hover:text-amber-400 transition font-medium text-sm uppercase tracking-wide">
							{t('monthly')}
						</Link>
						<Link href="/models" className="text-gray-300 hover:text-amber-400 transition font-medium text-sm uppercase tracking-wide">
							{t('domesticModels')}
						</Link>
					</nav>

					{/* Right Side */}
					<div className="flex items-center space-x-4">
						{/* Search Icon */}
						<button className="hidden md:block p-2 hover:bg-gray-800 rounded-lg transition">
							<svg className="w-5 h-5 text-gray-400 hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</button>

						{/* Language Selector */}
						<div className="relative">
							<button
								onClick={() => setIsLangOpen(!isLangOpen)}
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black hover:bg-gray-900 transition text-sm font-medium border border-gray-800"
							>
								<span className="text-xl">{currentLang.flag}</span>
								<span className="hidden sm:inline">{currentLang.name}</span>
								<svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							{isLangOpen && (
								<>
									<div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
									<div className="absolute right-0 mt-2 w-48 bg-black rounded-xl shadow-2xl py-2 z-50 border border-gray-800">
										{languages.map((lang) => (
											<button
												key={lang.code}
												onClick={() => {
													setLanguage(lang.code);
													setIsLangOpen(false);
												}}
												className={`w-full px-4 py-3 text-left hover:bg-gray-900 transition flex items-center gap-3 text-sm ${
													language === lang.code ? 'bg-gray-900 text-amber-400' : 'text-gray-300'
												}`}
											>
												<span className="text-xl">{lang.flag}</span>
												<span className="font-medium">{lang.name}</span>
												{language === lang.code && (
													<svg className="w-4 h-4 ml-auto text-blue-400" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												)}
											</button>
										))}
									</div>
								</>
							)}
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<nav className="md:hidden py-4 border-t border-gray-800">
						<Link href="/" className="block py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800 px-4 rounded transition">
							{t('allMagazines')}
						</Link>
						<Link href="#" className="block py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800 px-4 rounded transition">
							{t('anniversary')}
						</Link>
						<Link href="#" className="block py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800 px-4 rounded transition">
							{t('monthly')}
						</Link>
						<Link href="/models" className="block py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800 px-4 rounded transition">
							{t('domesticModels')}
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
}
