import { links } from "./links.js";
import { cards_handler } from "./cards.js";

window.addEventListener("load", (ev) => {
    links.run();
    cards_handler.run();
})