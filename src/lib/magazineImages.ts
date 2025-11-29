// 杂志图片配置
// 由于Vercel无法使用fs读取文件系统，我们需要手动配置图片列表

export const magazineImages: Record<string, string[]> = {
	// 十周年特刊
	'1': [
		'/magazines/10th-anniversary/封面封底-01.jpg',
		'/magazines/10th-anniversary/目录-2P.jpg',
		'/magazines/10th-anniversary/66.jpg',
		'/magazines/10th-anniversary/082-083-1.jpg',
		'/magazines/10th-anniversary/086.jpg',
		'/magazines/10th-anniversary/092.jpg',
		'/magazines/10th-anniversary/182-183-1.jpg',
		'/magazines/10th-anniversary/201.jpg',
		'/magazines/10th-anniversary/241.jpg',
	],
	// 2024年1月
	'2-1': [
		'/magazines/2024/1/001.jpg',
		'/magazines/2024/1/002-003.jpg',
		'/magazines/2024/1/010-011.jpg',
		'/magazines/2024/1/014-015.jpg',
	],
	// 2025年1月
	'3-01': [
		'/magazines/2025/01/001.jpg',
		'/magazines/2025/01/002-003 拷贝.jpg',
		'/magazines/2025/01/004-005 拷贝.jpg',
		'/magazines/2025/01/010-011 拷贝.jpg',
	],
};

export function getMagazineImages(magazineId: string, issue?: string): string[] {
	const key = issue ? `${magazineId}-${issue}` : magazineId;
	return magazineImages[key] || [];
}
