var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('es6', () => {
    return gulp.src(["src/**/*.js"], {base: "."})
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('dist'))
});

gulp.task('json', () => {
    return gulp.src(['src/common/config/*'], {base: "."})
        .pipe(gulp.dest('dist'))
});

gulp.task('views', () => {
    return gulp.src(['src/routes/**/views/*', 'src/common/views/*'], {base: "."})
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', () => {
        return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('src/common/styles/styles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('img', () => {
    return gulp.src(['src/common/img/**/*'], {base: "."})
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('server', function() {
    nodemon({
        script: 'dist/src/app.js',
        watch: ["src/**/*"],
        ext: 'js json',
        tasks: ['build']
    }).on('restart', function() {
        gulp.src('src/app.js').pipe(notify('Server successfully restarted'));
    })
});

gulp.task('default', ['build', 'sass:watch', 'server']);
gulp.task('build', ['es6', 'json', 'views', 'sass', 'img']);
gulp.task('heroku', ['clean', 'build']);
