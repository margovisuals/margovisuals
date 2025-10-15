// ==UserScript==
// @name         MargoVisuals
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  margovisuals
// @author       kaczka
// @match        https://*.margonem.pl/
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-body
// @updateURL    https://margovisuals.github.io/margovisuals/loader.user.js
// @downloadURL  https://margovisuals.github.io/margovisuals/loader.user.js
// ==/UserScript==
(function() {
    const s = document.createElement("script");
    s.src = "https://margovisuals.github.io/margovisuals/addons.js?" + Date.now();
    document.head.appendChild(s);
})();
