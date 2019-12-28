const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
sass.compiler = require('node-sass');

const env = process.env.NODE_ENV;

task('copy:html', () => {
    return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(reload({ stream: true }));
});

task('clean', () => {
    return src('dist/**/*', { read: false }).pipe(rm());
});

const style = [
     "node_modules/normalize.css/normalize.css",
     "src/styles/main.scss"
  ];

task('style', () => {
    return src(style)
        .pipe(gulpif(env == 'dev', sourcemaps.init()))
        .pipe(concat('main.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(env == 'dev',
            autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            })
        ))
        .pipe(gulpif(env == 'prod', gcmq()))
        .pipe(gulpif(env == 'prod', cleanCSS({ compatibility: 'ie8' })))
        .pipe(gulpif(env == 'dev', sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(reload({ stream: true }));
});

task('script', () => {
    return src('src/javascript/*.js')
        .pipe(gulpif(env == 'dev', sourcemaps.init()))
        .pipe(concat('main.js'))
        .pipe(gulpif(env == 'prod',
            babel({
                presets: ['@babel/env']
            })
        ))
        .pipe(gulpif(env == 'prod', uglify()))
        .pipe(gulpif(env == 'dev', sourcemaps.write()))
        .pipe(dest('dist'));
});

task('image', () => {
    return src('src/img/**/*.png')
        .pipe(dest('dist/img'));
});

task('icons', () => {
    return src('src/img/sprite.svg')
        .pipe(dest('dist/img'));
});

task('video', () => {
    return src('src/video/*.mp4')
        .pipe(dest('dist/video'));
});


task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});

task('watch', () => {
    watch("./src/styles/**/*.scss", series('style'));
    watch("./src/*.html", series('copy:html'));
    watch("./src/javascript/*.js", series('script'));
});

task('default', series(
    'clean',
    parallel('copy:html', 'style', 'script', 'image', 'icons', 'video'),
    parallel('watch', 'server')
));

task('build',
    series(parallel('copy:html', 'style', 'script', 'image', 'icons', 'video'),
    ));

// task('default', series('clean', parallel('copy:html', 'style', 'script', 'image', 'icons', 'video'), 'server'));
// // //  npm run gulp
