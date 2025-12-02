import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

const notoSansSC = Noto_Sans_SC({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
	variable: '--font-noto-sans-sc',
});

export const metadata: Metadata = {
	title: '模工坊杂志资料库 - Model Workshop Magazine Library',
	description: '收录模工坊月刊与十周年特刊 | Collection of Monthly Issues & Anniversary Special',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="zh-CN">
			<body className={notoSansSC.variable}>
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
