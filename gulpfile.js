var babel = require("gulp-babel");
var {src, dest} = require("gulp");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var cleanCss = require("gulp-clean-css");
var autoPrefixer = require("gulp-autoprefixer");

// 转换ES6为ES5 并压缩 js
function doJS() {
    return src(["./web/resource/js/QF.js","./web/js/*.js"])
    .pipe(babel({
        presets: ["es2015"]
    }))
    .pipe(uglify())
    .pipe(dest("./publish/js"))
}


// 处理HTML
function doHTML() {
    return src(["./Web/index.html", "./Web/html/*.html"])
    .pipe(htmlmin({
        "collapseWhitespace": true,
        "minifyCSS": true,
        "minifyJS": true,
        "removeEmptyAttributes": true
    }))
    .pipe(dest("./publish/html"));
}

//添加css前缀
function addPreName() {
    return src(["./Web/css/**/*.min.css", "./web/common/*.css"])
    .pipe(autoPrefixer())
    .pipe(dest("./publish/css"))
}

function doCss() {
    // 压缩css
    return src("./Web/common/*.css")
    .pipe(cleanCss())
    .pipe(dest("./publish/css"))
}



// 暴露
module.exports.doJS = doJS;
module.exports.doHTML = doHTML;
module.exports.addPreName = addPreName;
module.exports.doCss = doCss;
