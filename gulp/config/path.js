import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

// const buildFolder = `./dist`; // Можна використовувати rootFolder
const buildFolder = rootFolder;

const srcFolder = `./src`;

export const path = {
    // Папка dist(видається замовнику)
    build: {
        files: `${buildFolder}/assets/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/assets/js/`,
        images: `${buildFolder}/assets/`,
        fonts: `${buildFolder}/assets/fonts/`,
        pluginsFile: `${buildFolder}/assets/plugins/`,
    },

    //Папка із початковими файлами
    src: {
        files: `${srcFolder}/assets/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        // html: `${srcFolder}/*.pug`, // Для pug
        scss: `${srcFolder}/scss/main.scss`,
        // css: `${srcFolder}/style/scss/style.scss`,
        js: [`${srcFolder}/assets/js/app.js`, `${srcFolder}/js/plugins*.js`],
        //Якщо не  вказати розширення також іх верхнього регістру то можливий варіант не копіювання зображення
        images: `${srcFolder}/assets/**/*.+(png|PNG|jpg|JPG|jpeg|JPEG|gif|ico|webp)`,
        svg: `${srcFolder}/assets/**/*.svg`,
        svgicons: `${srcFolder}/assets/icons/*.svg`,

        pluginsJs: `${srcFolder}/assets/plugins/**/*.js`,
        pluginsCss: `${srcFolder}/assets/plugins/**/*.css`,
        pluginsPhp: `${srcFolder}/assets/plugins/**/*.php`,
    },

    //Об'єкт  для слідкування за файлами в реальному часі(browserSync)
    watch: {
        files: `${srcFolder}/assets/files/**/*.*+(mp4|mp3|pdf)`,
        html: `${srcFolder}/**/*.html`,
        // html: `${srcFolder}/*.pug`, // Для pug
        scss: `${srcFolder}/scss/main.scss`,
        // css: `${srcFolder}/style/**/*.{css,scss,less,sass}`,
        js: [`${srcFolder}/assets/js/**/*.js`],
        images: `${srcFolder}/assets/**/*.+(png|PNG|jpg|JPG|gif|ico|svg|webp)`,

        pluginsJs: `${srcFolder}/assets/plugins/**/*.js`,
        pluginsCss: `${srcFolder}/assets/plugins/**/*.css`,
        pluginsPhp: `${srcFolder}/assets/plugins/**/*.php`,
    },

    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `portfolio`,
};