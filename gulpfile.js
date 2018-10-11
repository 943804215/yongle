// gulp的插件

//1、http插件
const gulp = require("gulp");
// gulp 服务器插件;
const connect = require("gulp-connect");
// gulp 合并插件;
var concat = require('gulp-concat');

// gulp 压缩插件
var uglify = require("gulp-uglify");

// gulp css压缩插件
var cleanCss = require("gulp-clean-css");

gulp.task('connect', function() {
    connect.server({
        root:"dist/",
        livereload:true,
    })
});
// 如何发起一个代理请求 : 
// localhost:8888/proxy/目标;

gulp.task("html", ()=>{
    return gulp.src("*.html").pipe(gulp.dest("dist/")).pipe(connect.reload());;
})

gulp.task("watch", ()=>{
    gulp.watch("index.html",["html"]);
})

gulp.task("default",["watch","connect"]);

// script 转存指令

    gulp.task("script",()=>{
        return gulp.src(["script/app/*.js","script/module/*.js","script/libs/*.js"]).pipe(concat("mian.js")).pipe(uglify()).pipe(gulp.dest("dist/script"));
    })

gulp.task("css",()=>{
    return gulp.src(["css/*.css"]).pipe(cleanCss()).pipe(gulp.dest("dist/css"))
})