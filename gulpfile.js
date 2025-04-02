const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const through = require('through2');
const fs = require('fs');
const path = require('path');
const { deleteAsync } = require('del');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

// 读取 JSON 数据
const toolsData = JSON.parse(fs.readFileSync('./src/data/tools.json', 'utf8'));

// 清理构建目录
gulp.task('clean', function() {
  return deleteAsync(['dist/**']);
});

// 清理缓存
gulp.task('clean:cache', function(done) {
  return cache.clearAll(done);
});

// 编译 Handlebars 模板
gulp.task('templates', function() {
  return gulp.src('src/templates/**/*.hbs', { encoding: 'utf8' })
    .pipe(through.obj(function(file, enc, cb) {
      file.contents = Buffer.from(file.contents.toString('utf8'));
      cb(null, file);
    }))
    .pipe(handlebars(toolsData, {
      partials: {
        'header/search': fs.readFileSync('./src/templates/components/header/search.hbs', 'utf8'),
        'sidebar/categories': fs.readFileSync('./src/templates/components/sidebar/categories.hbs', 'utf8'),
        'categories/category': fs.readFileSync('./src/templates/components/categories/category.hbs', 'utf8')
      }
    }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// 复制并压缩 CSS 文件
gulp.task('css', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// 复制并压缩 JavaScript 文件
gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// 优化图片
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ])))
    .pipe(gulp.dest('dist/images'));
});

// 启动开发服务器
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000,
    open: true,
    notify: false,
    files: [
      'dist/**/*.html',
      'dist/css/**/*.css',
      'dist/js/**/*.js',
      'dist/images/**/*'
    ]
  });

  gulp.watch('src/templates/**/*.hbs', gulp.series('templates'));
  gulp.watch('src/css/**/*.css', gulp.series('css'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('src/images/**/*', gulp.series('images'));
});

// 构建任务
gulp.task('build', gulp.series('clean', 'templates', 'css', 'js', 'images'));

// 默认任务
gulp.task('default', gulp.series('build', 'serve')); 