import * as functionHeaderMenuBtnClick from "./modules/headerMenuBtnClick.js";
import {sendCustomFormToPost} from "./modules/sendCustomFormToPost.js";
import {scrollToTop} from "./modules/scrollToTop.js";
import {uiEnhancements} from "./modules/uiEnhancements.js";

// Актуальний рік у футері (на всіх сторінках)
const footerYearEl = document.getElementById("footer-year");
if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

scrollToTop();
uiEnhancements();
functionHeaderMenuBtnClick.headerMenuBtnClick();
sendCustomFormToPost();
