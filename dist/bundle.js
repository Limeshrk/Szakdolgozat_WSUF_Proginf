/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\nvar _require = __webpack_require__(/*! ./main */ \"./src/js/main.js\"),\n  buildHeader = _require.buildHeader,\n  buildFooter = _require.buildFooter;\n\n//# sourceURL=webpack://szakdolgozat_wsuf_proginf/./src/js/app.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((module) => {

eval("function buildFooter() {\n  var footerDiv = document.body.getElementsByTagName('div');\n  var lastDiv = footerDiv[footerDiv.length - 1];\n  var footerElement = document.createElement('footer');\n  var divElement = document.createElement('div');\n  divElement.className = 'copyright';\n  var pElement = document.createElement('p');\n  pElement.textContent = 'Copyright © 2023';\n  divElement.appendChild(pElement);\n  footerElement.appendChild(divElement);\n  lastDiv.appendChild(footerElement);\n}\nmodule.exports = buildFooter;\n\n//# sourceURL=webpack://szakdolgozat_wsuf_proginf/./src/js/footer.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((module) => {

eval("function buildHeader() {\n  window.addEventListener('DOMContentLoaded', function () {\n    var headerHTML = \"\\n    <header class=\\\"nav-header\\\">\\n      <nav class=\\\"main-menu-area\\\">\\n        <h2 class=\\\"offscreen\\\">Main menu area</h2>\\n        <div class=\\\"menu-homelogo\\\">\\n          <a href=\\\"index.html\\\">\\n            <img\\n              src=\\\"./img/logo.png\\\"\\n              alt=\\\"David Kovacs logo\\\"\\n              class=\\\"menubar-logo\\\"\\n            />\\n          </a>\\n        </div>\\n\\n        <div class=\\\"main-menu-container\\\">\\n        <i class=\\\"fas fa-bars menu-icon\\\"></i>\\n          <div class=\\\"hide-menu\\\">\\n          <i class=\\\"fa-solid fa-xmark close-icon\\\"></i>\\n            <ul class=\\\"main-menu\\\">\\n              <li class=\\\"menu-item\\\">\\n                <a href=\\\"aboutme.html\\\">Intro</a>\\n              </li>\\n              <li class=\\\"menu-item\\\">\\n                <a href=\\\"schedules.html\\\">Schedule</a>\\n              </li>\\n              <li class=\\\"menu-item\\\">\\n                <a href=\\\"contact.html\\\">Contact</a>\\n              </li>\\n            </ul>\\n            <div class=\\\"button-link-container\\\">\\n              <a\\n                href=\\\"https://www.instagram.com/davidxkovacs/\\\"\\n                aria-label=\\\"Instagram link\\\"\\n              >\\n                <i class=\\\"fab fa-instagram\\\" title=\\\"Instagram\\\"></i>\\n              </a>\\n              <a href=\\\"https://www.facebook.com/davidxkovacs\\\" aria-label=\\\"Facebook link\\\">\\n                <i class=\\\"fab fa-facebook-f\\\" title=\\\"Facebook\\\"></i>\\n              </a>\\n              <a\\n                href=\\\"https://open.spotify.com/user/1l3f667a2ufvuwiqrxvikuflk\\\"\\n                aria-label=\\\"Spotify link\\\"\\n              >\\n                <i class=\\\"fab fa-spotify\\\" title=\\\"Spotify\\\"></i>\\n              </a>\\n              <a href=\\\"https://soundcloud.com/davidxkovacs\\\" aria-label=\\\"Soundcloud link\\\">\\n                <i class=\\\"fab fa-soundcloud\\\" title=\\\"Soundcloud\\\"></i>\\n              </a>\\n              <a\\n                href=\\\"https://www.mixcloud.com/davidxkovacs/\\\"\\n                aria-label=\\\"Mixcloud link\\\"\\n              >\\n                <i class=\\\"fab fa-mixcloud\\\" title=\\\"Mixcloud\\\"></i>\\n              </a>\\n              <a\\n                href=\\\"https://www.beatport.com/artist/bonvibe/691983\\\"\\n                aria-label=\\\"Beatport link\\\"\\n              >\\n                <i class=\\\"fas fa-headphones\\\" title=\\\"Beatport\\\"></i>\\n              </a>\\n            </div>\\n          </div>\\n        </div>\\n      </nav>\\n    </header>\";\n    var buildHeaderDiv = document.querySelector('.build-header');\n    var newElement = document.createElement('div');\n    newElement.innerHTML = headerHTML;\n    buildHeaderDiv.appendChild(newElement);\n\n    // Add event listener to menu icon\n    var menuIcon = buildHeaderDiv.querySelector('.menu-icon');\n    var hideMenu = buildHeaderDiv.querySelector('.hide-menu');\n    menuIcon.addEventListener('click', function () {\n      // Show the menu when the icon is clicked\n      hideMenu.style.display = 'flex';\n    });\n\n    // Add event listener to close icon\n    var closeIcon = buildHeaderDiv.querySelector('.close-icon');\n    closeIcon.addEventListener('click', function () {\n      // Hide the menu when the close icon is clicked\n      hideMenu.style.display = 'none';\n    });\n  });\n}\nmodule.exports = buildHeader;\n\n//# sourceURL=webpack://szakdolgozat_wsuf_proginf/./src/js/header.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var buildHeader = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\nvar buildFooter = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\nwindow.buildHeader = buildHeader;\nwindow.buildFooter = buildFooter;\n\n//# sourceURL=webpack://szakdolgozat_wsuf_proginf/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;