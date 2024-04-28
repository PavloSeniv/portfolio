// function libsCss(params) {
//   return gulp
//     .src([
//       "node_modules/normalize.css/normalize.css",
//       "node_modules/aos/dist/aos.css",
//     ])
//     .pipe(concat("_libs.scss"))
//     .pipe(gulp.dest("#src/style/scss"))
//     .pipe(browsersync.stream());
// }

// function libsJs(params) {
//   return gulp
//     .src(["node_modules/aos/dist/aos.js"])
//     .pipe(concat("libs.js"))
//     .pipe(uglify())
//     .pipe(gulp.dest("#src/plugins/libs"))
//     .pipe(browsersync.stream());
// }
