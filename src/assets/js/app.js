import * as functionsIsWebp from "./modules/_webp_add_class_to_html.js";
import * as functionHeaderMenuBtnClick from "./modules/headerMenuBtnClick.js";

import {filterBadWords} from "./modules/filterBadWords.js";

functionsIsWebp.isWebp();
functionHeaderMenuBtnClick.headerMenuBtnClick()

filterBadWords('myForm','message')