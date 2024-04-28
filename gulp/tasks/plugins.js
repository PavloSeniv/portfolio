import uglify from "gulp-uglify"; // Оптимізація js
const uglifyFunc = uglify; //  Fix bug in console
import rename from "gulp-rename"; // Для перейменування файлу(переважно .min.*)
import cleanCss from "gulp-clean-css"; // Очищення та зжимання css файлу

// import concat from "gulp-concat"; // Об'єднання файлів
// import uncss from "gulp-uncss"; // Видалення невикористаних правил css

export const pluginsJs = () => {
  return app.gulp
    .src(app.path.src.pluginsJs, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "Plugins JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.pluginsFile))
    .pipe(app.plugins.if(app.isBuild,uglifyFunc()))
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(app.gulp.dest(app.path.build.pluginsFile))
    .pipe(app.plugins.browsersync.stream());
};

export const pluginsCss = () => {
  return app.gulp
    .src(app.path.src.pluginsCss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "Plugins Css",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.pluginsFile))
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.pluginsFile))
    .pipe(app.plugins.browsersync.stream());
};

export const pluginsPhp = () => {
  return app.gulp
    .src(app.path.src.pluginsPhp, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "Plugins Php",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.pluginsFile))
    .pipe(app.plugins.browsersync.stream());
};
