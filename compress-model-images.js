const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 源文件夹和目标文件夹
const sourceDir = 'D:\\模型杂志资料\\国产模型素材';
const outputDir = 'D:\\模型杂志资料\\国产模型素材_压缩版';

// 压缩配置
const config = {
  quality: 85, // 质量 (1-100)，85是高质量
  maxWidth: 1920, // 最大宽度
  maxHeight: 1920, // 最大高度
};

let processedCount = 0;
let totalSize = 0;
let compressedSize = 0;

// 递归处理文件夹
async function processDirectory(dir, relativePath = '') {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 创建对应的输出文件夹
      const outputSubDir = path.join(outputDir, relativePath, item);
      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }
      // 递归处理子文件夹
      await processDirectory(fullPath, path.join(relativePath, item));
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await compressImage(fullPath, relativePath, item, stat.size);
      }
    }
  }
}

// 压缩单个图片
async function compressImage(inputPath, relativePath, filename, originalSize) {
  try {
    const outputPath = path.join(outputDir, relativePath, filename);
    const outputFilename = filename.replace(/\.(png|PNG)$/, '.jpg');
    const finalOutputPath = path.join(outputDir, relativePath, outputFilename);

    // 确保输出目录存在
    const outputDirPath = path.dirname(finalOutputPath);
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }

    // 压缩图片
    await sharp(inputPath)
      .resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: config.quality })
      .toFile(finalOutputPath);

    const compressedStat = fs.statSync(finalOutputPath);
    const savedSize = originalSize - compressedStat.size;
    const savedPercent = ((savedSize / originalSize) * 100).toFixed(1);

    processedCount++;
    totalSize += originalSize;
    compressedSize += compressedStat.size;

    console.log(
      `[${processedCount}] ${path.join(relativePath, filename)} - ` +
      `${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedStat.size / 1024 / 1024).toFixed(2)}MB ` +
      `(节省 ${savedPercent}%)`
    );
  } catch (error) {
    console.error(`处理失败: ${filename}`, error.message);
  }
}

// 主函数
async function main() {
  console.log('开始压缩图片...');
  console.log(`源文件夹: ${sourceDir}`);
  console.log(`输出文件夹: ${outputDir}`);
  console.log(`压缩配置: 质量=${config.quality}, 最大尺寸=${config.maxWidth}x${config.maxHeight}`);
  console.log('---');

  // 创建输出文件夹
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const startTime = Date.now();
  await processDirectory(sourceDir);
  const endTime = Date.now();

  console.log('\n---');
  console.log('压缩完成！');
  console.log(`处理文件数: ${processedCount}`);
  console.log(`原始大小: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`压缩后大小: ${(compressedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`节省空间: ${((totalSize - compressedSize) / 1024 / 1024).toFixed(2)} MB (${((1 - compressedSize / totalSize) * 100).toFixed(1)}%)`);
  console.log(`耗时: ${((endTime - startTime) / 1000).toFixed(1)} 秒`);
}

main().catch(console.error);
