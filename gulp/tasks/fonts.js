import fs from "fs";
import fonter from "gulp-fonter"; // Конвертація шрифтів з otf формату
import ttf2woff2 from "gulp-ttf2woff2"; // Конвертація шрифтів

export const otfToTtf = (params) => {
  // Шукаємо файли шрифтів .otf
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS OTF",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Конвертуємо в .ttf
      .pipe(
        fonter({
          formats: ["ttf"],
        })
      )
      // Вивантажуємо у вихідну папку
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
  );
};

export const otfToWoff = (params) => {
  // Шукаємо файли шрифтів .ttf
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS TTF",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Конвертуємо в .ttf
      .pipe(
        fonter({
          formats: ["woff"],
        })
      )
      // Вивантажуємо у папку з результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      // Шукаємо файли шрифтів .ttf
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      // Конвертуємо в .woff2
      .pipe(ttf2woff2())
      // Вивантажуємо у папку з результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  );
};

// Для автоматичного запису шрифтів в css
export const fontsStyle = (params) => {
  // Файл стилю підключення шрифтів

  let fontsFile = `${app.path.srcFolder}/scss/_fonts.scss`; ///style/scss/_fonts.scss
  // Провіряємо чи існують файли шрифтів
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      // Провіряємо наявність файлу стилів для підключення шрифтів
      if (!fs.existsSync(fontsFile)) {
        // Якщо файлу немає тоді його створюємо
        fs.writeFile(fontsFile, "", callBack);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          // Записуємо підключення шрифтів в файл стилів
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;
            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;
            if (fontWeight.toLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === "extralight") {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === "extrabold" ||
              fontWeight.toLowerCase() === "heavy"
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(
              fontsFile,
              // `@font-face {
              //         font-family: ${fontName};
              //         font-display: swap;
              //         src: url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2");
              //         font-weight: ${fontWeight};
              //         font-style: normal;
              // }\r\n`,callBack);
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n\t}\r\n`,
              callBack
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        // Якзо файл існує, виводимо поідомлення
        console.log(
          "Файл scss/fonts.scss вже існує. Для обновлення файлу потрібно його видалити!"
        );
      }
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
  function callBack(params) {}
};