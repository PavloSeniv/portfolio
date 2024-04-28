// //Окреме завдання для створення svg спрайтів
// // gulp svgSprite in terminal
// gulp.task("svgSprite", function () {
//   return gulp
//     .src([source_folder + "/iconsprite/*.svg"])
//     .pipe(
//       svgSprite({
//         mode: {
//           stack: {
//             sprite: "../icons/icons.svg", //sprite file name
//             example: true,
//           },
//         },
//       })
//     )
//     .pipe(dest(path.build.img));
// });

//Окреме завдання для створення svg спрайтів
import fileSvgSpriteInclude from "gulp-svg-sprite"; // Створення svg спрайтів

export const svgSprite = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG SPRITE",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      fileSvgSpriteInclude({
        mode: {
          stack: {
            sprite: "../icons/icons.svg", //sprite file name
            // Створення сторінки зі всіма іконками
            example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.images));
};
