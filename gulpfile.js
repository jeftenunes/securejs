const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('serve', ['static'], () => {
    const result = tsProject.src()
        .pipe(tsProject());

    result.js
        .pipe(gulp.dest('dist'));

    return;
});

gulp.task('static', ['clean'], () => {
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());
});

gulp.task('build', ['clean', 'static', 'serve']);

gulp.task('watch', ['build'], () => {
    gulp.watch(['src/**/*.ts', 'src/**/*.ts']);
});

gulp.task('default', ['watch']);