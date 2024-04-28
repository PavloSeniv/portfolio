//Копіювання index.html з src до dist(якщо папки немає, gulp створить сам)
import fileInclude from "gulp-file-include"; // Для об'єднання декількох html файлів в єдиний index.html
import webpHtmlNoSvg from "gulp-webp-html-nosvg"; //Інтеграція webp в html
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(fileInclude())
      // // Для pug
      // .pipe(
      //   pug({
      //     // Стиснення HTML файла
      //     pretty: true,
      //     // Показування в терміналі який файл оброблено
      //     verbose: true,
      //   })
      // )
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(app.plugins.if(app.isBuild, webpHtmlNoSvg()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
