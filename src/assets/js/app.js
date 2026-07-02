import * as functionsIsWebp from "./modules/_webp_add_class_to_html.js";
import * as functionHeaderMenuBtnClick from "./modules/headerMenuBtnClick.js";

import {filterBadWords} from "./modules/filterBadWords.js";
import {spoiler} from "./modules/plugins_spollers_acordeon.js";
import {sendCustomFormToPost} from "./modules/sendCustomFormToPost.js";
import {scrollToTop} from "./modules/scrollToTop.js";

// Актуальний рік у футері (працює на всіх сторінках). Ставимо першим,
// щоб виконалось незалежно від решти ініціалізацій нижче.
const footerYearEl = document.getElementById("footer-year");
if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

// Кнопка "нагору" (є в футері на всіх сторінках)
scrollToTop();

functionsIsWebp.isWebp();
functionHeaderMenuBtnClick.headerMenuBtnClick();
spoiler();

// Форма є лише на головній сторінці — не ініціалізуємо на сторінках проєктів,
// щоб уникнути помилок (getElementById('myForm') === null).
if (document.getElementById("myForm")) {
    filterBadWords("myForm", "message");
    sendCustomFormToPost();
}