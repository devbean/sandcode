const { dest, series, src, parallel } = require('gulp');
const path = require('path');
const zip = require('gulp-zip');


const rootPath = path.resolve(__dirname, '.');
const distPath = path.resolve(rootPath, 'pack');

function pack() {
  return src([ `${rootPath}/**`, '.editorconfig', '!node_modules/**', 'gulpfile.js' ])
    .pipe(zip('project.zip'))
    .pipe(dest(distPath));
}

exports.pack = pack;
exports.default = series(pack);
