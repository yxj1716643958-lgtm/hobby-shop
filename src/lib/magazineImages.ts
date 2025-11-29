// Magazine images configuration - using only ASCII filenames
export const magazineImages: Record<string, string[]> = {
	'1': [
		'/magazines/10th-anniversary/cover-10th.jpg',
		'/magazines/10th-anniversary/66.jpg',
		'/magazines/10th-anniversary/082-083-1.jpg',
		'/magazines/10th-anniversary/086.jpg',
		'/magazines/10th-anniversary/88.jpg',
		'/magazines/10th-anniversary/092.jpg',
	],
	'2-1': [
		'/magazines/2024/1/001.jpg',
		'/magazines/2024/1/002-003.jpg',
		'/magazines/2024/1/010-011.jpg',
		'/magazines/2024/1/014-015.jpg',
		'/magazines/2024/1/080-081.jpg',
		'/magazines/2024/1/110-111.jpg',
	],
	'2-2': [
		'/magazines/2024/2/002-003.jpg',
		'/magazines/2024/2/006-007.jpg',
		'/magazines/2024/2/096-097.jpg',
		'/magazines/2024/2/112-113.jpg',
	],
	'2-3': [
		'/magazines/2024/3/24-3-14.jpg',
		'/magazines/2024/3/24-3-37.jpg',
		'/magazines/2024/3/24-3-58.jpg',
		'/magazines/2024/3/24-3-64.jpg',
	],
	'2-4': [
		'/magazines/2024/4/014-015.jpg',
		'/magazines/2024/4/046-047.jpg',
		'/magazines/2024/4/050-051.jpg',
	],
	'2-5': [
		'/magazines/2024/5/002-003.jpg',
		'/magazines/2024/5/004-005.jpg',
		'/magazines/2024/5/062-063.jpg',
	],
	'2-6': [
		'/magazines/2024/6/002-003.jpg',
		'/magazines/2024/6/042-043.jpg',
		'/magazines/2024/6/052-053.jpg',
	],
	'2-7': [
		'/magazines/2024/7/002-003-1.jpg',
		'/magazines/2024/7/002-003-2.jpg',
		'/magazines/2024/7/036-039-1.jpg',
	],
	'2-8': [
		'/magazines/2024/8/001.jpg',
		'/magazines/2024/8/002-003.jpg',
		'/magazines/2024/8/012-013.jpg',
	],
	'2-10': [
		'/magazines/2024/10/001.jpg',
		'/magazines/2024/10/002-003.jpg',
		'/magazines/2024/10/010-011.jpg',
	],
	'2-11': [
		'/magazines/2024/11/001.jpg',
		'/magazines/2024/11/002-003.jpg',
		'/magazines/2024/11/010-011.jpg',
	],
	'2-12': [
		'/magazines/2024/12/001.jpg',
		'/magazines/2024/12/002-003.jpg',
		'/magazines/2024/12/006-007.jpg',
	],
	'3-01': [
		'/magazines/2025/01/001.jpg',
		'/magazines/2025/01/070-071.jpg',
		'/magazines/2025/01/074-075.jpg',
		'/magazines/2025/01/090-095-6.jpg',
		'/magazines/2025/01/112-115-1.jpg',
	],
	'3-02': [
		'/magazines/2025/02/001.jpg',
		'/magazines/2025/02/002-003.jpg',
		'/magazines/2025/02/012-013.jpg',
	],
	'3-03': [
		'/magazines/2025/03/001.jpg',
		'/magazines/2025/03/002-003.jpg',
		'/magazines/2025/03/014-015.jpg',
	],
	'3-04': [
		'/magazines/2025/04/001.jpg',
		'/magazines/2025/04/002-003.jpg',
		'/magazines/2025/04/010-011.jpg',
	],
	'3-05': [
		'/magazines/2025/05/001.jpg',
		'/magazines/2025/05/014-017-1.jpg',
		'/magazines/2025/05/060-061.jpg',
	],
	'3-06': [
		'/magazines/2025/06/001.jpg',
		'/magazines/2025/06/002-003.jpg',
		'/magazines/2025/06/004-005.jpg',
	],
};

export function getMagazineImages(magazineId: string, issue?: string): string[] {
	const key = issue ? `${magazineId}-${issue}` : magazineId;
	return magazineImages[key] || [];
}
