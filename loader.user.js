// ==UserScript==
// @name         MargoVisuals
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  margovisuals
// @author       kaczka
// @match        https://*.margonem.pl/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @icon         https://raw.githubusercontent.com/krystianasaaa/margonem-addons/b939ec05fdd03f6f973cef7a931659c224596bde/ikonka.png
// @run-at       document-body
// @updateURL    https://krystianasaaa.github.io/margonem-addons/loader.user.js
// @downloadURL  https://krystianasaaa.github.io/margonem-addons/loader.user.js
// ==/UserScript==

(function() {
    const s = document.createElement("script");
    s.src = "https://krystianasaaa.github.io/margonem-addons/addons.js?" + Date.now();
    document.head.appendChild(s);
})();
