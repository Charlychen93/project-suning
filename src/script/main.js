import "jquery";
import "../stylesheets/index.css";
import "../stylesheets/login.css";
import "../stylesheets/register.css";
import "../stylesheets/cartlist.css";
import "../stylesheets/details.css";
import "../fonts/iconfont.css";

import { indexjs } from "./index.js";
import { Login } from "./login.js";
import { Register } from "./register.js";
import { Details } from "./details.js";
import { Cartlist } from "./cartlist.js";

let currentpage = $('#current').attr('page');
if (currentpage === 'index') {
    new indexjs().init();
} else if (currentpage === 'login') {
    new Login().init();
} else if (currentpage === 'register') {
    new Register().init();
} else if (currentpage === 'details') {
    new Details().init();
} else if (currentpage === 'cartlist') {
    new Cartlist().init();
}