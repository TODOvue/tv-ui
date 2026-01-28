import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NODE_MODULES_PACKAGES_DIR = path.resolve(__dirname, '../node_modules/@todovue');
const TARGET_DIR = path.resolve(__dirname, '../public/demos');

const getComponentPaths = () => {
  const components = [];

  if (fs.existsSync(NODE_MODULES_PACKAGES_DIR)) {
    const files = fs.readdirSync(NODE_MODULES_PACKAGES_DIR);
    files.forEach(file => {
      const fullPath = path.join(NODE_MODULES_PACKAGES_DIR, file);

      if (fs.statSync(fullPath).isDirectory()) {
        components.push({ name: file, path: fullPath });
      }
    });
  } else {
    console.error(`Could not find @todovue packages in: ${NODE_MODULES_PACKAGES_DIR}`);
    process.exit(1);
  }

  return components;
};

const copyAssets = () => {
  const components = getComponentPaths();

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  if (components.length === 0) {
    console.warn('No components found to copy assets from.');
  }

  components.forEach(({ name, path: srcDir }) => {
    const destDir = path.join(TARGET_DIR, name);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const filesToCopy = ['README.md', 'CHANGELOG.md'];

    filesToCopy.forEach(file => {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);

      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile);
      }
    });
  });
};

copyAssets();
