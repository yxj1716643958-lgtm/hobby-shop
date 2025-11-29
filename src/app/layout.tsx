import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
	title: '模工坊杂志资料库 - Model Workshop Magazine Library',
	description: '收录模工坊月刊与十周年特刊 | Collection of Monthly Issues & Anniversary Special',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="zh-CN">
			<body>
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
