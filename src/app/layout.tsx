import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'UKA模工坊 - 日系模型与手办收藏',
	description: '专业的日系模型、手办与收藏品平台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="zh-CN">
			<body>{children}</body>
		</html>
	);
}
