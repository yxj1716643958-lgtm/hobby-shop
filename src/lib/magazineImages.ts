// 杂志图片配置
// 由于Vercel无法使用fs读取文件系统，我们需要手动配置图片列表

export const magazineImages: Record<string, string[]> = {
	// 十周年特刊
	'1': [
		'/magazines/10th-anniversary/cover-10th.jpg',
		'/magazines/10th-anniversary/66.jpg',
		'/magazines/10th-anniversary/082-083-1.jpg',
		'/magazines/10th-anniversary/086.jpg',
		'/magazines/10th-anniversary/88.jpg',
		'/magazines/10th-anniversary/092.jpg',
		'/magazines/10th-anniversary/182-183-1.jpg',
		'/magazines/10th-anniversary/201.jpg',
		'/magazines/10th-anniversary/241.jpg',
	],
	// 2024年月刊 - 使用实际存在的文件
	'2-1': ['/magazines/2024/1/001.jpg', '/magazines/2024/1/002-003.jpg', '/magazines/2024/1/010-011.jpg'],
	'2-2': ['/magazines/2024/2/001 拷贝.jpg', '/magazines/2024/2/002-003.jpg', '/magazines/2024/2/006-007.jpg'],
	'2-3': ['/magazines/2024/3/24-3印前-1 拷贝.jpg', '/magazines/2024/3/24-3印前-14.jpg', '/magazines/2024/3/24-3印前-37.jpg'],
	'2-4': ['/magazines/2024/4/001 拷贝.jpg', '/magazines/2024/4/002-003 拷贝.jpg', '/magazines/2024/4/014-015 拷贝.jpg'],
	'2-5': ['/magazines/2024/5/001 拷贝.jpg', '/magazines/2024/5/002-003 拷贝.jpg', '/magazines/2024/5/004-005 拷贝.jpg'],
	'2-6': ['/magazines/2024/6/001 拷贝.jpg', '/magazines/2024/6/002-003.jpg', '/magazines/2024/6/042-043 拷贝.jpg'],
	'2-7': ['/magazines/2024/7/001 拷贝.jpg', '/magazines/2024/7/002-003-1 拷贝.jpg', '/magazines/2024/7/002-003-2 拷贝.jpg'],
	'2-8': ['/magazines/2024/8/001.jpg', '/magazines/2024/8/002-003 拷贝.jpg', '/magazines/2024/8/012-013 拷贝.jpg'],
	'2-10': ['/magazines/2024/10/001.jpg', '/magazines/2024/10/002-003 拷贝.jpg', '/magazines/2024/10/010-011 拷贝.jpg'],
	'2-11': ['/magazines/2024/11/001.jpg', '/magazines/2024/11/002-003.jpg', '/magazines/2024/11/010-011.jpg'],
	'2-12': ['/magazines/2024/12/001 拷贝.jpg', '/magazines/2024/12/002-003 拷贝.jpg', '/magazines/2024/12/006-007 拷贝.jpg'],
	// 2025年月刊 - 使用实际存在的文件
	'3-01': ['/magazines/2025/01/001.jpg', '/magazines/2025/01/070-071.jpg', '/magazines/2025/01/074-075.jpg'],
	'3-02': ['/magazines/2025/02/001 拷贝.jpg', '/magazines/2025/02/002-003 拷贝.jpg', '/magazines/2025/02/012-013 拷贝.jpg'],
	'3-03': ['/magazines/2025/03/001 拷贝.jpg', '/magazines/2025/03/002-003 拷贝.jpg', '/magazines/2025/03/014-015 拷贝.jpg'],
	'3-04': ['/magazines/2025/04/001 拷贝.jpg', '/magazines/2025/04/002-003 拷贝.jpg', '/magazines/2025/04/010-011 拷贝.jpg'],
	'3-05': ['/magazines/2025/05/001 拷贝.jpg', '/magazines/2025/05/014-017-1 拷贝.jpg', '/magazines/2025/05/060-061 拷贝.jpg'],
	'3-06': ['/magazines/2025/06/001.jpg', '/magazines/2025/06/002-003.jpg', '/magazines/2025/06/004-005 拷贝.jpg'],
};

export function getMagazineImages(magazineId: string, issue?: string): string[] {
	const key = issue ? `${magazineId}-${issue}` : magazineId;
	return magazineImages[key] || [];
}
