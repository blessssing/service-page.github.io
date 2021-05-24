import validateEmail from "./modules/subscribe";
import { subscribe } from "./modules/subscribe";
import getACall from "./modules/getACall";
import { btnCall } from "./modules/getACall";
import * as slider from "./modules/slider/slider";
console.log("second developer changed js file");

// === subscribe ===
subscribe.onclick = validateEmail;
// / === subscribe ===

// === get a call ===
btnCall.onclick = getACall;
// / === get a call ===
