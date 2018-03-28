var gulp = require('gulp')
var sass = require('gulp-sass')
var clean = require('gulp-clean-css')

gulp.task('pik', function () {
  gulp.src('sass/style.scss') // где лежит точка входа sass

    .pipe(sass()) // сначала превращаем сасс в цсс
    .pipe(clean())  // потом минифицируем

    .pipe(gulp.dest('./css/'))  // куда записываем то что получилось
})

gulp.task('default', function () {
  // за какими файлами следить и что запускать, когда файлы изменились
  // мы следим за всеми файлами sass, и если что-то меняется, запускаем задачу pik
  gulp.watch('sass/**/*.scss', ['pik'])
})
