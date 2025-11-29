const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1200, null, { // 限制宽度为1200px，保持比例
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 75 }) // 压缩质量75%
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const saved = ((1 - outputSize / inputSize) * 100).toFixed(2);
    console.log(`✓ ${path.basename(inputPath)} - Saved ${saved}%`);
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
  }
}

async function compressDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await compressDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const tempPath = filePath + '.tmp';
      await compressImage(filePath, tempPath);
      fs.renameSync(tempPath, filePath);
    }
  }
}

console.log('Starting image compression...\n');
compressDirectory('./public/magazines')
  .then(() => console.log('\n✓ All images compressed!'))
  .catch(err => console.error('Error:', err));
