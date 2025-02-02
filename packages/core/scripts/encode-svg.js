const fs = require('fs');
const path = require('path');

const svgDir = path.resolve(__dirname, '../src/components/icon/assets');
const outputFile = path.resolve(__dirname, '../src/components/icon/assets/encodedSvgs.ts');

const encodeSvg = (filePath) => {
  const svg = fs.readFileSync(filePath, 'utf8');
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

const files = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

const encodedSvgs = files.reduce((acc, file) => {
  const name = path.basename(file, '.svg');
  acc[name] = encodeSvg(path.join(svgDir, file));
  return acc;
}, {});

const content = `export const encodedSvgs = ${JSON.stringify(encodedSvgs, null, 2)};`;

fs.writeFileSync(outputFile, content);
console.log('SVGs encoded and written to', outputFile);
