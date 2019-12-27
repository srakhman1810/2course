const {src , dest, task, series, watch} = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

task('copy', ()=>{
    return src('src/styles/**/*.scss').pipe(dest('dist'));
    // npm run gulp copy
});

task('clean', ()=>{
    return src('dist/**/*', {read:false}).pipe(rm());
    // npm install --save-dev gulp-rm есть 
    // npm run gulp clean
});

const style = [
   'node_modules/normalize.css/normalize.css',
   // npm install --save normalize.css есть
   'src/styles/main.scss'
]

task('style', ()=>{
    return src(style)
    .pipe(concat('main.scss'))
     // npm install --save-dev gulp-concat есть
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'));
    // npm install node-sass gulp-sass --save-dev есть
    // npm run gulp style
});

// // gulp.task('browser-sync',()=> {
// //     browserSync.init({
// //         server: {
// //             baseDir: "./dist"
// //         }
// //     });
// // });

watch("./src/styles/**/*.scss", series('style'));
task('default', series('clean' , 'style'));
// //  npm run gulp

// // сервер
// // npm install browser-sync --save-dev


