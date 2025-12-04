const OSS = require('ali-oss');
const fs = require('fs');
const path = require('path');

// 阿里云OSS配置
const client = new OSS({
	region: 'oss-cn-beijing',
	accessKeyId: 'YOUR_ACCESS_KEY_ID', // 需要替换
	accessKeySecret: 'YOUR_ACCESS_KEY_SECRET', // 需要替换
	bucket: 'moxing12311',
});

const baseFolder = '模工坊月刊2024/';
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12'];

async function scanMagazines() {
	const result = {};

	for (const month of months) {
		console.log(`扫描 ${month} 月刊...`);
		const folderPath = `${baseFolder}${month}/`;

		try {
			// 列出文件夹中的所有文件
			const listResult = await client.list({
				prefix: folderPath,
				delimiter: '/',
			});

			// 过滤出图片文件并排序
			const images = listResult.objects
				.filter((obj) => {
					const fileName = obj.name.replace(folderPath, '');
					return fileName && fileName.match(/\.(jpg|jpeg|png)$/i);
				})
				.map((obj) => {
					const fileName = obj.name.replace(folderPath, '');
					return fileName;
				})
				.sort((a, b) => {
					// 自然排序
					return a.localeCompare(b, undefined, { numeric: true });
				});

			console.log(`  找到 ${images.length} 张图片`);

			// 生成完整URL
			const urls = images.map(
				(img) =>
					`https://moxing12311.oss-cn-beijing.aliyuncs.com/${encodeURIComponent(
						baseFolder
					)}${month}/${encodeURIComponent(img)}`
			);

			result[`2-${month}`] = urls;
		} catch (error) {
			console.error(`扫描 ${month} 月刊失败:`, error.message);
		}
	}

	return result;
}

async function generateConfig() {
	console.log('开始扫描阿里云OSS...\n');

	const magazineImages = await scanMagazines();

	// 生成TypeScript配置代码
	let configCode = `// Magazine images configuration - Auto-generated from OSS\nexport const magazineImages: Record<string, string[]> = {\n`;

	// 添加10周年特辑（保持原有配置）
	configCode += `\t'1': [\n`;
	configCode += `\t\t'/magazines/10th-anniversary/cover-10th.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/66.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/082-083-1.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/086.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/88.jpg',\n`;
	configCode += `\t\t'/magazines/10th-anniversary/092.jpg',\n`;
	configCode += `\t],\n`;

	// 添加2024年月刊
	for (const [key, urls] of Object.entries(magazineImages)) {
		configCode += `\t'${key}': [\n`;
		urls.forEach((url) => {
			configCode += `\t\t'${url}',\n`;
		});
		configCode += `\t],\n`;
	}

	// 添加2025年月刊（保持原有配置）
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

	console.log('\n✅ 配置文件已生成:', outputPath);
	console.log('\n统计信息:');
	for (const [key, urls] of Object.entries(magazineImages)) {
		console.log(`  ${key}: ${urls.length} 张图片`);
	}
}

// 运行脚本
generateConfig().catch((error) => {
	console.error('❌ 生成配置失败:', error);
	process.exit(1);
});
