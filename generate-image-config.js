const fs = require('fs');
const path = require('path');

function getImagesFromDir(dir) {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);
  return files
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .filter(file => !file.includes('Thumbs.db'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '0');
      const numB = parseInt(b.match(/\d+/)?.[0] || '0');
      return numA - numB;
    })
    .slice(0, 6); // 只取前6张
}

const config = {};

// 十周年
const anniversary = getImagesFromDir('./public/magazines/10th-anniversary');
config['1'] = anniversary.map(f => `/magazines/10th-anniversary/${f}`);

// 2024年月刊
const issues2024 = ['1', '2', '3', '4', '5', '6', '7', '8', '10', '11', '12'];
issues2024.forEach(issue => {
  const images = getImagesFromDir(`./public/magazines/2024/${issue}`);
  if (images.length > 0) {
    config[`2-${issue}`] = images.map(f => `/magazines/2024/${issue}/${f}`);
  }
});

// 2025年月刊
const issues2025 = ['01', '02', '03', '04', '05', '06'];
issues2025.forEach(issue => {
  const images = getImagesFromDir(`./public/magazines/2025/${issue}`);
  if (images.length > 0) {
    config[`3-${issue}`] = images.map(f => `/magazines/2025/${issue}/${f}`);
  }
});

console.log('export const magazineImages: Record<string, string[]> = ' + JSON.stringify(config, null, 2) + ';');
console.log('\nexport function getMagazineImages(magazineId: string, issue?: string): string[] {');
console.log('  const key = issue ? `${magazineId}-${issue}` : magazineId;');
console.log('  return magazineImages[key] || [];');
console.log('}');
