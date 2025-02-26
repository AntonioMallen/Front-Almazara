const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Tarea para compilar todos los archivos .less manteniendo la estructura
gulp.task('less', function () {
  return gulp.src('src/Styles/less/**/*.less', { base: 'src/Styles/less' })
    .pipe(less())
    .pipe(gulp.dest('src/Styles/css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/Styles/css'));
});

// Tarea para observar cambios en los archivos .less y compilar automáticamente
gulp.task('watch', function () {
  gulp.watch('src/Styles/Less/**/*.less', gulp.series('less'));
});

// Tarea por defecto: compila y observa cambios
gulp.task('default', gulp.series('less', 'watch'));
