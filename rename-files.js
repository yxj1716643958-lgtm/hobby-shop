const fs = require('fs');
const path = require('path');

function renameFilesInDirectory(dir) {
	const files = fs.readdirSync(dir, { withFileTypes: true });

	files.forEach(file => {
		const fullPath = path.join(dir, file.name);

		if (file.isDirectory()) {
			renameFilesInDirectory(fullPath);
		} else if (file.name.includes(' 拷贝')) {
			const newName = file.name.replace(/ 拷贝/g, '');
			const newPath = path.join(dir, newName);

			try {
				fs.renameSync(fullPath, newPath);
				console.log(`Renamed: ${file.name} -> ${newName}`);
			} catch (err) {
				console.error(`Error renaming ${file.name}:`, err.message);
			}
		}
	});
}

const magazinesDir = path.join(__dirname, 'public', 'magazines');
renameFilesInDirectory(magazinesDir);
console.log('Done!');
