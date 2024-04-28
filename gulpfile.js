// Основний модуль
import gulp from "gulp"; //Ініціалізація gulp
// Імпорт шляхів
import { path } from "./gulp/config/path.js";
// Імпорт спільних плагінів
import { plugins } from "./gulp/config/plugins.js";

// Передача значення в глобальну змінну
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, otfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { pluginsJs, pluginsCss, pluginsPhp } from "./gulp/tasks/plugins.js";

// Слідкування за змінами в файлах у реальному часі
function watcher(params) {
  gulp.watch(path.watch.files, copy); //Для files
  gulp.watch(path.watch.html, html); //Для html
  // gulp.watch(path.watch.html, gulp.series(html,ftp)); //Для html  вивантаження по ftp
  gulp.watch(path.watch.scss, scss); // Для css
  gulp.watch(path.watch.js, js); // Для js
  gulp.watch(path.watch.images, images); // Для img
  gulp.watch(path.watch.pluginsJs, pluginsJs); // Для plugins .js file
  gulp.watch(path.watch.pluginsCss, pluginsCss); // Для plugins .css file
  gulp.watch(path.watch.pluginsPhp, pluginsPhp); // Для plugins .php file
  // //gulp.watch([path.watch.libsCss], libsCss); // Для node_modules .css file
  // //gulp.watch([path.watch.libsCss], libsJs); // Для node_modules .js file
}
// Послідовна обробка плагінів
const pluginsFiles = gulp.series(pluginsJs, pluginsCss, pluginsPhp);
// Послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, otfToWoff, fontsStyle);
// Основі завдання
const mainTasks = gulp.series(
  fonts,
  pluginsFiles,
  gulp.parallel(copy, html, scss, js, images)
);

// Процес виконання
// Побудова сценаріїв виконування задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFtp = gulp.series(reset, mainTasks, ftp);

export { dev };
export { build };
export { deployZip };
export { deployFtp };

// npm run svgSprite
export { svgSprite };

// Виконування сценарію за замовчуванням
gulp.task("default", dev);
