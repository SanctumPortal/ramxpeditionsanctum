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

// Build task
function build() {
  return gulp.src([
    '*.html',
    'css/**/*.css',
    'js/**/*.js',
    'img/**/*',
    'videos/**/*',
    'lang/**/*',
    'contracts/**/*',
    'docs/**/*',
    '*.ico',
    '*.png',
    'robots.txt',
    'sitemap.xml'
  ], { base: './' })
    .pipe(gulp.dest('dist'));
}

gulp.task('default', serve);
gulp.task('build', build);