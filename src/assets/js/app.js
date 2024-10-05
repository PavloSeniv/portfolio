import * as functionsIsWebp from "./modules/_webp_add_class_to_html.js";
import * as functionHeaderMenuBtnClick from "./modules/headerMenuBtnClick.js";

import {filterBadWords} from "./modules/filterBadWords.js";
import {spoiler} from "./modules/plugins_spollers_acordeon.js";
import {sendCustomFormToPost} from "./modules/sendCustomFormToPost.js";


functionsIsWebp.isWebp();
functionHeaderMenuBtnClick.headerMenuBtnClick()

filterBadWords('myForm', 'message')
spoiler()
sendCustomFormToPost()