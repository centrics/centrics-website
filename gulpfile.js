const gulp = require('gulp')
const connect = require('gulp-connect')
const stylus  = require('gulp-stylus')
const nib = require('nib')
const rupture = require('rupture')
const plumber = require('gulp-plumber')

const paths = {
  html: './src/html/**/*',
  css: './src/stylus/**/*'
}

gulp.task('connect', () => {
  connect.server({
    root: './docs',
    port: 7777,
    livereload: true,
    host: '0.0.0.0'
  })
})

gulp.task('html', () => {
  gulp.src('./src/html/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('./docs'))
    .pipe(connect.reload())
})

gulp.task('stylus', () => {
  gulp.src('./src/stylus/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      compress: false,
      use: [nib(), rupture()],
      import: ['nib']
    }))
    .pipe(gulp.dest('./docs/assets/css'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(paths.css, ['stylus'])
  gulp.watch(paths.html, ['html'])
})

gulp.task('build', ['html', 'stylus'])
gulp.task('server', ['build', 'connect', 'watch'])
