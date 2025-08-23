const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Server task
function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watchFiles();
  done();
}

// Watch task
function watchFiles() {
  gulp.watch('./**/*.html', browserSync.reload);
  gulp.watch('./css/**/*.css', browserSync.reload);
  gulp.watch('./js/**/*.js', browserSync.reload);
}

gulp.task('default', serve);