import validateEmail from "./modules/subscribe";
import { subscribe } from "./modules/subscribe";
import getACall from "./modules/getACall";
import { btnCall } from "./modules/getACall";
import * as slider from "./modules/slider/slider";
// === subscribe ===
subscribe.onclick = validateEmail;
// / === subscribe ===

// === get a call ===
btnCall.onclick = getACall;
// / === get a call ===

// === git test section ===
console.log("second developer changed js file");
console.log("test extension git history diff");
console.log("test graph commands in vscode");
console.log("test aliases");
console.log("test branch about");
// / === git test section ===
