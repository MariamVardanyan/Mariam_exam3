const gulp = require('gulp') 
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('minify', () => {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public/minify'));
});

gulp.task('imagemin', async () => {
  gulp.src('image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/image'));
});
 
gulp.task('pug', function() {  
  return gulp.src('index.pug')
      .pipe(pug())
      .pipe(gulp.dest('public'));
});


