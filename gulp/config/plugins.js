import replace from "gulp-replace"; // Пошук та заміна
import plumber from "gulp-plumber"; // Обробка помилок
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Перевірка обновлень
import ifPlugin from "gulp-if"; // Умовний оператор
import log from "fancy-log"; // Логування

// Легкий замінник gulp-notify (без залежності node-notifier / без десктоп-сповіщень):
// логуємо помилку у консоль і тримаємо стрім живим — сумісно з gulp-plumber errorHandler.
const notify = {
    onError(options) {
        const title = (options && options.title) || "Error";
        return function (error) {
            log.error(`[${title}] ${error && error.message ? error.message : error}`);
            if (this && typeof this.emit === "function") {
                this.emit("end");
            }
        };
    },
};

// Ескспорт об'єкту
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
};
