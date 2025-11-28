'use client';

import { useState } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<h1 className="text-2xl font-bold text-primary">UKA模工坊</h1>
					</div>

					<nav className="hidden md:flex space-x-8">
						<a href="#" className="text-gray-700 hover:text-primary transition">
							新品上架
						</a>
						<a href="#" className="text-gray-700 hover:text-primary transition">
							模型专区
						</a>
						<a href="#" className="text-gray-700 hover:text-primary transition">
							手办专区
						</a>
						<a href="#" className="text-gray-700 hover:text-primary transition">
							漫画周边
						</a>
						<a href="#" className="text-gray-700 hover:text-primary transition">
							特价促销
						</a>
					</nav>

					<div className="flex items-center space-x-4">
						<button className="text-gray-700 hover:text-primary">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
						<button className="text-gray-700 hover:text-primary">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</button>
						<button className="text-gray-700 hover:text-primary relative">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
								0
							</span>
						</button>
						<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<nav className="md:hidden py-4 border-t">
						<a href="#" className="block py-2 text-gray-700 hover:text-primary">
							新品上架
						</a>
						<a href="#" className="block py-2 text-gray-700 hover:text-primary">
							模型专区
						</a>
						<a href="#" className="block py-2 text-gray-700 hover:text-primary">
							手办专区
						</a>
						<a href="#" className="block py-2 text-gray-700 hover:text-primary">
							漫画周边
						</a>
						<a href="#" className="block py-2 text-gray-700 hover:text-primary">
							特价促销
						</a>
					</nav>
				)}
			</div>
		</header>
	);
}
