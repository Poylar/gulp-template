const gulp = require('gulp');
const { styles } = require('./styles');
const { path } = require('../config/path');
const { plugins } = require('../config/plugins');

exports.server = function server() {
  plugins.browsersync.init({
    server: {
      baseDir: `${path.build.markup}`,
    },
    port: 3000,
    open: false,
  });

  gulp.watch('src/css/**/*.css', { ignoreInitial: false }, gulp.series(styles));
};
