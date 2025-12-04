// 简化版：不需要OSS SDK，手动输入文件列表
const fs = require('fs');
const path = require('path');

// 手动配置每个月刊的图片文件名（从阿里云OSS复制）
const magazineFiles = {
	'1': [
		'000.jpg',
		'001.jpg',
		'002-003.jpg',
		'010-011.jpg',
		'014-015.jpg',
		'038-039.jpg',
		'052-053.jpg',
		'066-067-1.jpg',
		'080-081.jpg',
		'090-091.jpg',
		'102-105-1.jpg',
		'110-111.jpg',
		'116-121-1.jpg',
		'122-125-1.jpg',
		'138-160-1.jpg',
		'158-160-1.jpg',
	],
	'2': [
		'000.jpg',
		'001.jpg',
		'002-003.jpg',
		'006-007.jpg',
		'042-043.jpg',
		'058-059.jpg',
		'091.jpg',
		'096-097.jpg',
		'112-113.jpg',
		'122-125.jpg',
		'142-145.jpg',
		'166-190-1.jpg',
	],
	'3': ['000.jpg', '001.jpg', '002.jpg', '003.jpg'], // 请补充完整
	'4': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'5': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'6': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'7': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'8': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'10': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'11': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
	'12': ['000.jpg', '001.jpg', '002.jpg'], // 请补充完整
};

function generateConfig() {
	console.log('生成配置文件...\n');

	const baseUrl = 'https://moxing12311.oss-cn-beijing.aliyuncs.com';
	const baseFolder = encodeURIComponent('模工坊月刊2024');

	let configCode = `// Magazine images configuration - using only ASCII filenames\nexport const magazineImages: Record<string, string[]> = {\n`;

	// 添加10周年特辑
	configCode += `\t'1': [\n`;
	configCode += `\t\t'/magazines/10th-anniversary/cover-10th.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/66.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/082-083-1.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/086.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/88.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/092.jpg',\n`;
	configCode += `\t],\n`;

	// 添加2024年月刊
	for (const [month, files] of Object.entries(magazineFiles)) {
		configCode += `\t'2-${month}': [\n`;
		files.forEach((file) => {
			const encodedFile = encodeURIComponent(file);
			configCode += `\t\t'${baseUrl}/${baseFolder}/${month}/${encodedFile}',\n`;
		});
		configCode += `\t],\n`;
	}

	// 添加2025年月刊
	const months2025 = ['01', '02', '03', '04', '05', '06'];
	for (const month of months2025) {
		configCode += `\t'3-${month}': [\n`;
		configCode += `\t\t'/magazines/2025/${month}/001.jpg',\n`;
		configCode += `\t\t'/magazines/2025/${month}/070-071.jpg',\n`;
		configCode += `\t\t'/magazines/2025/${month}/074-075.jpg',\n`;
		configCode += `\t],\n`;
	}

	configCode += `};\n\n`;
	configCode += `export function getMagazineImages(magazineId: string, issue?: string): string[] {\n`;
	configCode += `\tconst key = issue ? \`\${magazineId}-\${issue}\` : magazineId;\n`;
	configCode += `\treturn magazineImages[key] || [];\n`;
	configCode += `}\n`;

	// 写入文件
	const outputPath = path.join(__dirname, 'src/lib/magazineImages.ts');
	fs.writeFileSync(outputPath, configCode, 'utf-8');

	console.log('✅ 配置文件已生成:', outputPath);
	console.log('\n统计信息:');
	for (const [month, files] of Object.entries(magazineFiles)) {
		console.log(`  ${month}月刊: ${files.length} 张图片`);
	}
	console.log('\n⚠️  请补充3-12月的完整图片列表！');
}

generateConfig();
