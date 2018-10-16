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

// sass编译插件
var sass =require("gulp-sass-china")


// gulp.task('connect', function() {
//     connect.server({
//         root:"dist/",
//         livereload:true,
//     })
// });
gulp.task('connect', function() {
    connect.server({
        port:8888,
        root:"dist/",
        livereload:true,
        // 中间件;
        middleware:function(connect , opt){
            var Proxy = require('gulp-connect-proxy');
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    })
});
// 如何发起一个代理请求 : 
// localhost:8888/proxy/目标;

gulp.task("html", ()=>{
    return gulp.src("*.html").pipe(gulp.dest("dist/")).pipe(connect.reload());;
})

gulp.task("watch", ()=>{
    gulp.watch("*.html",["html","sass"]);
    gulp.watch("sass/*.scss",["html","sass"]);
})

gulp.task("default",["watch","connect","css"]);

// script 转存指令

    gulp.task("script",()=>{
        return gulp.src(["script/app/*.js","script/module/*.js","script/libs/*.js"]).pipe(concat("mian.js")).pipe(uglify()).pipe(gulp.dest("dist/script"));
    })

gulp.task("css",()=>{
    return gulp.src(["css/*.css"]).pipe(cleanCss()).pipe(gulp.dest("dist/css"))
});

gulp.task("sass", () =>{
    return gulp.src(["sass/*.scss"])
           .pipe(sass().on("error",sass.logError))
           .pipe(gulp.dest("dist/css"))
           .pipe(gulp.dest("css"))
})

gulp.task("js", ()=>{
    return gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());;
})

gulp.task("images", ()=>{
    return gulp.src("images/*").pipe(gulp.dest("dist/images")).pipe(connect.reload());;
})
