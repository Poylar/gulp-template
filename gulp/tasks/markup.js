const { src, dest, series, watch } = require('gulp')
const del = require('del')
const njk = require('gulp-nunjucks-render')
const beautify = require('gulp-beautify')
const { path } = require('../config/path');
const { plugins } = require('../config/plugins');
exports.markup = () => (
  src(path.src.markup)
    .pipe(
      njk({
        path: ['src/views'],
      })
    )
    .pipe(beautify.html({ indent_size: 4, preserve_newlines: false }))
    .pipe(dest('dist'))
    .pipe(plugins.browsersync.stream())
);