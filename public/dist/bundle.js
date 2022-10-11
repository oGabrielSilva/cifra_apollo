/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/modules/apollo/cipher.ts":
/*!******************************************!*\
  !*** ./src/app/modules/apollo/cipher.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var map_1 = __webpack_require__(/*! ../../../utils/map */ "./src/utils/map.ts");
var cipher = function (text, cipherValue, decrypt) {
    var split = text.split('');
    var arr = [];
    if (!decrypt) {
        split.forEach(function (t) {
            var find = map_1.default.find(function (v) { return v.value === t; });
            if (!!find) {
                var code_1 = find.code + cipherValue;
                var nFind = map_1.default.find(function (i) { return i.code === code_1; });
                if (!!nFind)
                    return arr.push(nFind.value);
            }
            arr.push(t);
        });
    }
    else {
        split.forEach(function (t) {
            var find = map_1.default.find(function (v) { return v.value === t && v.code - cipherValue >= 0; });
            if (!!find) {
                var code_2 = find.code - cipherValue;
                var nFind = map_1.default.find(function (i) { return i.code === code_2; });
                if (!!nFind)
                    return arr.push(nFind.value);
            }
            arr.push(t);
        });
    }
    return arr.join('');
};
exports["default"] = cipher;


/***/ }),

/***/ "./src/app/modules/encrypt.ts":
/*!************************************!*\
  !*** ./src/app/modules/encrypt.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var encrypt = function (text, cipher, decrypt) {
    return text
        .split('')
        .map(function (t) { return t.charCodeAt(0); })
        .map(function (code) { return String.fromCharCode(decrypt ? code - cipher : code + cipher); })
        .join('');
};
exports["default"] = encrypt;


/***/ }),

/***/ "./src/resources/colors.ts":
/*!*********************************!*\
  !*** ./src/resources/colors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initTheme = void 0;
var Constants_1 = __webpack_require__(/*! ../utils/Constants */ "./src/utils/Constants.ts");
var light = {
    bg: '#b2b7c6',
    bgLight: '#d9d9d9',
    textTitle: '#0a0a0a',
    textOnVariant: '#fcfcfc',
    text: '#2e2e2e',
    variant: '#ff0000',
    mode: 'light',
};
var dark = {
    bg: '#12141b',
    bgLight: '#232838',
    textTitle: '#fcfcfc',
    textOnVariant: '#fcfcfc',
    text: '#bdbdbd',
    variant: '#ff0000',
    mode: 'dark',
};
var initTheme = function () {
    var mode = localStorage.getItem(Constants_1.default.THEME_ID);
    if (!mode)
        localStorage.setItem(Constants_1.default.THEME_ID, Constants_1.default.THEME_DARK_ID);
    setTheme();
};
exports.initTheme = initTheme;
var setTheme = function () {
    var mode = localStorage.getItem(Constants_1.default.THEME_ID);
    var colors = mode === Constants_1.default.THEME_DARK_ID ? dark : light;
    delete colors.mode;
    var colorsArr = Object.values(colors);
    Object.keys(colors).forEach(function (key, index) {
        return document.documentElement.style.setProperty('--' + key, colorsArr[index]);
    });
    onThemeChange();
};
var onThemeChange = function () {
    var icon = document.querySelector('#icon');
    var btnSetTheme = document.querySelector('#btn-set-theme');
    var mode = localStorage.getItem(Constants_1.default.THEME_ID);
    if (icon)
        icon.src = mode === Constants_1.default.THEME_LIGHT_ID ? 'images/icon.svg' : 'images/icon-dark.svg';
    if (btnSetTheme && btnSetTheme.querySelector('span')) {
        btnSetTheme.querySelector('span').textContent = mode === Constants_1.default.THEME_LIGHT_ID ? 'sunny' : 'dark_mode';
    }
};
var changeTheme = function () {
    var mode = localStorage.getItem(Constants_1.default.THEME_ID);
    switch (mode) {
        case Constants_1.default.THEME_DARK_ID:
            localStorage.setItem(Constants_1.default.THEME_ID, Constants_1.default.THEME_LIGHT_ID);
            break;
        default:
            localStorage.setItem(Constants_1.default.THEME_ID, Constants_1.default.THEME_DARK_ID);
            break;
    }
    setTheme();
};
exports["default"] = changeTheme;


/***/ }),

/***/ "./src/utils/Constants.ts":
/*!********************************!*\
  !*** ./src/utils/Constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Constants = /** @class */ (function () {
    function Constants(THEME_ID, THEME_LIGHT_ID, THEME_DARK_ID) {
        if (THEME_ID === void 0) { THEME_ID = '@display:theme-uuid'; }
        if (THEME_LIGHT_ID === void 0) { THEME_LIGHT_ID = '@display:theme-light'; }
        if (THEME_DARK_ID === void 0) { THEME_DARK_ID = '@display:theme-dark'; }
        this.THEME_ID = THEME_ID;
        this.THEME_LIGHT_ID = THEME_LIGHT_ID;
        this.THEME_DARK_ID = THEME_DARK_ID;
    }
    return Constants;
}());
exports["default"] = new Constants();


/***/ }),

/***/ "./src/utils/map.ts":
/*!**************************!*\
  !*** ./src/utils/map.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var map = [
    { code: 0, value: 'a' },
    { code: 1, value: 'T' },
    { code: 2, value: 'U' },
    { code: 3, value: 'V' },
    { code: 4, value: 'W' },
    { code: 5, value: 'X' },
    { code: 6, value: 'Y' },
    { code: 7, value: 'à' },
    { code: 8, value: 'é' },
    { code: 9, value: 'è' },
    { code: 10, value: 'í' },
    { code: 11, value: 'ì' },
    { code: 12, value: 'ó' },
    { code: 13, value: 'ò' },
    { code: 14, value: 'ô' },
    { code: 15, value: 'ú' },
    { code: 16, value: 'ù' },
    { code: 17, value: 'ã' },
    { code: 18, value: 'õ' },
    { code: 19, value: 'Á' },
    { code: 20, value: 'À' },
    { code: 21, value: 'É' },
    { code: 22, value: 'È' },
    { code: 23, value: 'Í' },
    { code: 24, value: 'Ì' },
    { code: 25, value: 'Z' },
    { code: 26, value: 'Ç' },
    { code: 27, value: '1' },
    { code: 28, value: '2' },
    { code: 29, value: '3' },
    { code: 30, value: '4' },
    { code: 31, value: '5' },
    { code: 32, value: 'j' },
    { code: 33, value: 'k' },
    { code: 34, value: 'l' },
    { code: 35, value: 'm' },
    { code: 36, value: 'n' },
    { code: 37, value: 'o' },
    { code: 38, value: ':' },
    { code: 39, value: '?' },
    { code: 40, value: '/' },
    { code: 41, value: '\\' },
    { code: 42, value: '|' },
    { code: 43, value: "'" },
    { code: 44, value: '"' },
    { code: 45, value: '~' },
    { code: 46, value: 'ª' },
    { code: 47, value: 'º' },
    { code: 48, value: 'á' },
    { code: 49, value: 'p' },
    { code: 50, value: 'q' },
    { code: 51, value: 'r' },
    { code: 52, value: 'Ò' },
    { code: 53, value: 'Ô' },
    { code: 54, value: 'Ú' },
    { code: 55, value: 'Ù' },
    { code: 56, value: 'Ã' },
    { code: 57, value: 'Õ' },
    { code: 58, value: ' ' },
    { code: 59, value: 'ê' },
    { code: 60, value: 'Ê' },
    { code: 61, value: 'â' },
    { code: 62, value: 'Â' },
    { code: 63, value: 's' },
    { code: 64, value: 't' },
    { code: 65, value: 'u' },
    { code: 66, value: 'v' },
    { code: 67, value: '(' },
    { code: 68, value: ')' },
    { code: 69, value: '-' },
    { code: 70, value: '_' },
    { code: 71, value: '+' },
    { code: 72, value: '=' },
    { code: 73, value: '[' },
    { code: 74, value: ']' },
    { code: 75, value: '{' },
    { code: 76, value: '}' },
    { code: 77, value: '´' },
    { code: 78, value: 'w' },
    { code: 79, value: 'x' },
    { code: 80, value: 'y' },
    { code: 81, value: 'z' },
    { code: 82, value: 'ç' },
    { code: 83, value: 'A' },
    { code: 84, value: 'B' },
    { code: 85, value: 'C' },
    { code: 86, value: 'D' },
    { code: 87, value: 'E' },
    { code: 88, value: 'F' },
    { code: 89, value: 'G' },
    { code: 90, value: 'H' },
    { code: 91, value: 'I' },
    { code: 92, value: 'J' },
    { code: 93, value: 'K' },
    { code: 94, value: 'L' },
    { code: 95, value: 'M' },
    { code: 96, value: 'N' },
    { code: 97, value: 'O' },
    { code: 98, value: 'P' },
    { code: 99, value: 'Q' },
    { code: 100, value: 'b' },
    { code: 101, value: 'c' },
    { code: 102, value: 'd' },
    { code: 103, value: 'e' },
    { code: 104, value: 'f' },
    { code: 105, value: 'g' },
    { code: 106, value: 'h' },
    { code: 107, value: 'i' },
    { code: 108, value: 'R' },
    { code: 109, value: 'S' },
    { code: 110, value: '6' },
    { code: 111, value: '7' },
    { code: 112, value: '8' },
    { code: 113, value: '9' },
    { code: 114, value: '0' },
    { code: 115, value: '!' },
    { code: 116, value: '@' },
    { code: 117, value: '#' },
    { code: 118, value: '$' },
    { code: 119, value: '%' },
    { code: 120, value: '&' },
    { code: 121, value: '*' },
    { code: 122, value: '`' },
    { code: 123, value: ',' },
    { code: 124, value: '.' },
    { code: 125, value: '<' },
    { code: 126, value: '>' },
    { code: 127, value: ';' },
    { code: 128, value: 'Ó' },
    { code: 129, value: 'ñ' },
    { code: 130, value: 'Ñ' },
    { code: 131, value: 'î' },
    { code: 132, value: 'Î' },
    { code: 133, value: '÷' },
    { code: 134, value: 'a' },
    { code: 135, value: 'T' },
    { code: 136, value: 'U' },
    { code: 137, value: 'V' },
    { code: 138, value: 'W' },
    { code: 139, value: 'X' },
    { code: 140, value: 'Y' },
    { code: 141, value: 'à' },
    { code: 142, value: 'é' },
    { code: 143, value: 'è' },
    { code: 144, value: 'í' },
    { code: 145, value: 'ì' },
    { code: 146, value: 'ó' },
    { code: 147, value: 'ò' },
    { code: 148, value: 'ô' },
    { code: 149, value: 'ú' },
    { code: 150, value: 'ù' },
    { code: 151, value: 'ã' },
    { code: 152, value: 'õ' },
    { code: 153, value: 'Á' },
    { code: 154, value: 'À' },
    { code: 155, value: 'É' },
    { code: 156, value: 'È' },
    { code: 157, value: 'Í' },
    { code: 158, value: 'Ì' },
    { code: 159, value: 'Z' },
    { code: 160, value: 'Ç' },
    { code: 161, value: '1' },
    { code: 162, value: '2' },
    { code: 163, value: '3' },
    { code: 164, value: '4' },
    { code: 165, value: '5' },
    { code: 166, value: 'j' },
    { code: 167, value: 'k' },
    { code: 168, value: 'l' },
    { code: 169, value: 'm' },
    { code: 170, value: 'n' },
    { code: 171, value: 'o' },
    { code: 172, value: ':' },
    { code: 173, value: '?' },
    { code: 174, value: '/' },
    { code: 175, value: '\\' },
    { code: 176, value: '|' },
    { code: 177, value: "'" },
    { code: 178, value: '"' },
    { code: 179, value: '~' },
    { code: 180, value: 'ª' },
    { code: 181, value: 'º' },
    { code: 182, value: 'á' },
    { code: 183, value: 'p' },
    { code: 184, value: 'q' },
    { code: 185, value: 'r' },
    { code: 186, value: 'Ò' },
    { code: 187, value: 'Ô' },
    { code: 188, value: 'Ú' },
    { code: 189, value: 'Ù' },
    { code: 190, value: 'Ã' },
    { code: 191, value: 'Õ' },
    { code: 192, value: ' ' },
    { code: 193, value: 'ê' },
    { code: 194, value: 'Ê' },
    { code: 195, value: 'â' },
    { code: 196, value: 'Â' },
    { code: 197, value: 's' },
    { code: 198, value: 't' },
    { code: 199, value: 'u' },
    { code: 200, value: 'v' },
    { code: 201, value: '(' },
    { code: 202, value: ')' },
    { code: 203, value: '-' },
    { code: 204, value: '_' },
    { code: 205, value: '+' },
    { code: 206, value: '=' },
    { code: 207, value: '[' },
    { code: 208, value: ']' },
    { code: 209, value: '{' },
    { code: 210, value: '}' },
    { code: 211, value: '´' },
    { code: 212, value: 'w' },
    { code: 213, value: 'x' },
    { code: 214, value: 'y' },
    { code: 215, value: 'z' },
    { code: 216, value: 'ç' },
    { code: 217, value: 'A' },
    { code: 218, value: 'B' },
    { code: 219, value: 'C' },
    { code: 220, value: 'D' },
    { code: 221, value: 'E' },
    { code: 222, value: 'F' },
    { code: 223, value: 'G' },
    { code: 224, value: 'H' },
    { code: 225, value: 'I' },
    { code: 226, value: 'J' },
    { code: 227, value: 'K' },
    { code: 228, value: 'L' },
    { code: 229, value: 'M' },
    { code: 230, value: 'N' },
    { code: 231, value: 'O' },
    { code: 232, value: 'P' },
    { code: 233, value: 'Q' },
    { code: 234, value: 'b' },
    { code: 235, value: 'c' },
    { code: 236, value: 'd' },
    { code: 237, value: 'e' },
    { code: 238, value: 'f' },
    { code: 239, value: 'g' },
    { code: 240, value: 'h' },
    { code: 241, value: 'i' },
    { code: 242, value: 'R' },
    { code: 243, value: 'S' },
    { code: 244, value: '6' },
    { code: 245, value: '7' },
    { code: 246, value: '8' },
    { code: 247, value: '9' },
    { code: 248, value: '0' },
    { code: 249, value: '!' },
    { code: 250, value: '@' },
    { code: 251, value: '#' },
    { code: 252, value: '$' },
    { code: 253, value: '%' },
    { code: 254, value: '&' },
    { code: 255, value: '*' },
    { code: 256, value: '`' },
    { code: 257, value: ',' },
    { code: 258, value: '.' },
    { code: 259, value: '<' },
    { code: 260, value: '>' },
    { code: 261, value: ';' },
    { code: 262, value: 'Ó' },
    { code: 263, value: 'ñ' },
    { code: 264, value: 'Ñ' },
    { code: 265, value: 'î' },
    { code: 266, value: 'Î' },
    { code: 267, value: '÷' },
];
exports["default"] = map;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/app/main.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var colors_1 = __webpack_require__(/*! ../resources/colors */ "./src/resources/colors.ts");
var cipher_1 = __webpack_require__(/*! ./modules/apollo/cipher */ "./src/app/modules/apollo/cipher.ts");
var encrypt_1 = __webpack_require__(/*! ./modules/encrypt */ "./src/app/modules/encrypt.ts");
var btnSetTheme = document.querySelector('#btn-set-theme');
var cipherInput = document.querySelector('#cipher');
var input = document.querySelector('#content');
var encryptButton = document.querySelector('#cr');
var decryptButton = document.querySelector('#dc');
var containerModal = document.querySelector('#container-modal');
var btnCopy = document.querySelector('#modal-copy');
var modalMessage = document.querySelector('#modal-message');
if (btnSetTheme)
    btnSetTheme.addEventListener('click', function () { return (0, colors_1.default)(); });
if (containerModal) {
    containerModal.addEventListener('click', function (_a) {
        var target = _a.target;
        var id = target.id;
        if (id === containerModal.id ||
            id === btnCopy.id ||
            btnCopy.querySelector('span').classList.contains(btnCopy.id)) {
            containerModal.style.top = '-100vh';
        }
    });
}
if (btnCopy && btnCopy.querySelector('span')) {
    btnCopy.addEventListener('click', function () {
        var span = btnCopy.querySelector('span');
        var content = span.textContent;
        span.textContent = 'check_small';
        var text = modalMessage.textContent;
        window.navigator.clipboard.writeText(text);
        setTimeout(function () { return (span.textContent = content); }, 1500);
    });
}
if (encryptButton && cipherInput && decryptButton) {
    cipherInput.addEventListener('input', function (event) {
        var value = Number(event.target.value);
        if (value < 0 || typeof value !== 'number')
            return (cipherInput.value = '' + 1);
        if (value > 100)
            return (cipherInput.value = '100');
        cipherInput.value = String(Math.abs(value));
    });
    encryptButton.addEventListener('click', function () {
        var cipher = Number(cipherInput.value);
        modalMessage.textContent = (0, encrypt_1.default)(input.value, typeof cipher === 'number' && cipher !== 0 ? cipher : 2);
        containerModal.style.top = '0';
    });
    decryptButton.addEventListener('click', function () {
        var cipher = Number(cipherInput.value);
        modalMessage.textContent = (0, encrypt_1.default)(input.value, typeof cipher === 'number' && cipher !== 0 ? cipher : 2, true);
        containerModal.style.top = '0';
    });
}
(0, colors_1.initTheme)();
var c = (0, cipher_1.default)('Olá mundo! Hello world.', 10);
console.log('crypt: ', c);
console.log('dcrypt: ', (0, cipher_1.default)(c, 10, true));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdGQUFxQztBQUVyQyxJQUFNLE1BQU0sR0FBRyxVQUFDLElBQVksRUFBRSxXQUFtQixFQUFFLE9BQWlCO0lBQ2xFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsSUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNkLElBQU0sSUFBSSxHQUFHLGFBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNWLElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNyQyxJQUFNLEtBQUssR0FBRyxhQUFHLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEtBQUssTUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsQ0FBQyxLQUFLO29CQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDZCxJQUFNLElBQUksR0FBRyxhQUFHLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsV0FBVyxJQUFJLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDVixJQUFNLE1BQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDckMsSUFBTSxLQUFLLEdBQUcsYUFBRyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxLQUFLLE1BQUksRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSztvQkFBRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYscUJBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0J0QixJQUFNLE9BQU8sR0FBRyxVQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsT0FBaUI7SUFDOUQsT0FBTyxJQUFJO1NBQ1IsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNULEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFmLENBQWUsQ0FBQztTQUMzQixHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssYUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQztTQUMzRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixxQkFBZSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDUnZCLDRGQUEyQztBQVkzQyxJQUFNLEtBQUssR0FBRztJQUNaLEVBQUUsRUFBRSxTQUFTO0lBQ2IsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsSUFBSSxFQUFFLFNBQVM7SUFDZixPQUFPLEVBQUUsU0FBUztJQUNsQixJQUFJLEVBQUUsT0FBTztDQUNkLENBQUM7QUFFRixJQUFNLElBQUksR0FBRztJQUNYLEVBQUUsRUFBRSxTQUFTO0lBQ2IsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsSUFBSSxFQUFFLFNBQVM7SUFDZixPQUFPLEVBQUUsU0FBUztJQUNsQixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUM7QUFFSyxJQUFNLFNBQVMsR0FBRztJQUN2QixJQUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEQsSUFBSSxDQUFDLElBQUk7UUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFTLENBQUMsUUFBUSxFQUFFLG1CQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFN0UsUUFBUSxFQUFFLENBQUM7QUFDYixDQUFDLENBQUM7QUFOVyxpQkFBUyxhQU1wQjtBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRELElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxtQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ25CLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztRQUNyQyxlQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFBeEUsQ0FBd0UsQ0FDekUsQ0FBQztJQUNGLGFBQWEsRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLElBQU0sYUFBYSxHQUFHO0lBQ3BCLElBQU0sSUFBSSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELElBQU0sV0FBVyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEYsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRELElBQUksSUFBSTtRQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLG1CQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDcEcsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNwRCxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssbUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0tBQzNHO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUc7SUFDbEIsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRELFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxtQkFBUyxDQUFDLGFBQWE7WUFDMUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsRUFBRSxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25FLE1BQU07UUFDUjtZQUNFLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxRQUFRLEVBQUUsbUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRSxNQUFNO0tBQ1Q7SUFDRCxRQUFRLEVBQUUsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLHFCQUFlLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdFM0I7SUFDRSxtQkFDa0IsUUFBZ0MsRUFDaEMsY0FBdUMsRUFDdkMsYUFBcUM7UUFGckMsMkRBQWdDO1FBQ2hDLHdFQUF1QztRQUN2QyxxRUFBcUM7UUFGckMsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtJQUNwRCxDQUFDO0lBQ04sZ0JBQUM7QUFBRCxDQUFDO0FBRUQscUJBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ04vQixJQUFNLEdBQUcsR0FBVztJQUNsQixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN2QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFF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LE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekcsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUN0QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxXQUFXLEdBQUcscUJBQU8sRUFDaEMsS0FBSyxDQUFDLEtBQUssRUFDWCxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3ZELElBQUksQ0FDTCxDQUFDO1FBQ0YsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxzQkFBUyxHQUFFLENBQUM7QUFFWixJQUFNLENBQUMsR0FBRyxvQkFBTSxFQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLG9CQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lmcmFhcG9sbG8vLi9zcmMvYXBwL21vZHVsZXMvYXBvbGxvL2NpcGhlci50cyIsIndlYnBhY2s6Ly9jaWZyYWFwb2xsby8uL3NyYy9hcHAvbW9kdWxlcy9lbmNyeXB0LnRzIiwid2VicGFjazovL2NpZnJhYXBvbGxvLy4vc3JjL3Jlc291cmNlcy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vY2lmcmFhcG9sbG8vLi9zcmMvdXRpbHMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2NpZnJhYXBvbGxvLy4vc3JjL3V0aWxzL21hcC50cyIsIndlYnBhY2s6Ly9jaWZyYWFwb2xsby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaWZyYWFwb2xsby8uL3NyYy9hcHAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFwIGZyb20gJy4uLy4uLy4uL3V0aWxzL21hcCc7XG5cbmNvbnN0IGNpcGhlciA9ICh0ZXh0OiBzdHJpbmcsIGNpcGhlclZhbHVlOiBudW1iZXIsIGRlY3J5cHQ/OiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHNwbGl0ID0gdGV4dC5zcGxpdCgnJyk7XG4gIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcbiAgaWYgKCFkZWNyeXB0KSB7XG4gICAgc3BsaXQuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgY29uc3QgZmluZCA9IG1hcC5maW5kKCh2KSA9PiB2LnZhbHVlID09PSB0KTtcbiAgICAgIGlmICghIWZpbmQpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGZpbmQuY29kZSArIGNpcGhlclZhbHVlO1xuICAgICAgICBjb25zdCBuRmluZCA9IG1hcC5maW5kKChpKSA9PiBpLmNvZGUgPT09IGNvZGUpO1xuICAgICAgICBpZiAoISFuRmluZCkgcmV0dXJuIGFyci5wdXNoKG5GaW5kLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNwbGl0LmZvckVhY2goKHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbmQgPSBtYXAuZmluZCgodikgPT4gdi52YWx1ZSA9PT0gdCAmJiB2LmNvZGUgLSBjaXBoZXJWYWx1ZSA+PSAwKTtcbiAgICAgIGlmICghIWZpbmQpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGZpbmQuY29kZSAtIGNpcGhlclZhbHVlO1xuICAgICAgICBjb25zdCBuRmluZCA9IG1hcC5maW5kKChpKSA9PiBpLmNvZGUgPT09IGNvZGUpO1xuICAgICAgICBpZiAoISFuRmluZCkgcmV0dXJuIGFyci5wdXNoKG5GaW5kLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHQpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBhcnIuam9pbignJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaXBoZXI7XG4iLCJjb25zdCBlbmNyeXB0ID0gKHRleHQ6IHN0cmluZywgY2lwaGVyOiBudW1iZXIsIGRlY3J5cHQ/OiBib29sZWFuKSA9PiB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KCcnKVxuICAgIC5tYXAoKHQpID0+IHQuY2hhckNvZGVBdCgwKSlcbiAgICAubWFwKChjb2RlKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY3J5cHQgPyBjb2RlIC0gY2lwaGVyIDogY29kZSArIGNpcGhlcikpXG4gICAgLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5jcnlwdDtcbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvQ29uc3RhbnRzJztcblxuZXhwb3J0IHR5cGUgVENvbG9ycyA9IHtcbiAgYmc6IHN0cmluZztcbiAgYmdMaWdodDogc3RyaW5nO1xuICB0ZXh0VGl0bGU6IHN0cmluZztcbiAgdGV4dE9uVmFyaWFudDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhcmlhbnQ6IHN0cmluZztcbiAgbW9kZTogJ2xpZ2h0JyB8ICdkYXJrJztcbn07XG5cbmNvbnN0IGxpZ2h0ID0ge1xuICBiZzogJyNiMmI3YzYnLFxuICBiZ0xpZ2h0OiAnI2Q5ZDlkOScsXG4gIHRleHRUaXRsZTogJyMwYTBhMGEnLFxuICB0ZXh0T25WYXJpYW50OiAnI2ZjZmNmYycsXG4gIHRleHQ6ICcjMmUyZTJlJyxcbiAgdmFyaWFudDogJyNmZjAwMDAnLFxuICBtb2RlOiAnbGlnaHQnLFxufTtcblxuY29uc3QgZGFyayA9IHtcbiAgYmc6ICcjMTIxNDFiJyxcbiAgYmdMaWdodDogJyMyMzI4MzgnLFxuICB0ZXh0VGl0bGU6ICcjZmNmY2ZjJyxcbiAgdGV4dE9uVmFyaWFudDogJyNmY2ZjZmMnLFxuICB0ZXh0OiAnI2JkYmRiZCcsXG4gIHZhcmlhbnQ6ICcjZmYwMDAwJyxcbiAgbW9kZTogJ2RhcmsnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCk7XG5cbiAgaWYgKCFtb2RlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuVEhFTUVfSUQsIENvbnN0YW50cy5USEVNRV9EQVJLX0lEKTtcblxuICBzZXRUaGVtZSgpO1xufTtcblxuY29uc3Qgc2V0VGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuVEhFTUVfSUQpO1xuXG4gIGNvbnN0IGNvbG9ycyA9IG1vZGUgPT09IENvbnN0YW50cy5USEVNRV9EQVJLX0lEID8gZGFyayA6IGxpZ2h0O1xuICBkZWxldGUgY29sb3JzLm1vZGU7XG4gIGNvbnN0IGNvbG9yc0FyciA9IE9iamVjdC52YWx1ZXMoY29sb3JzKTtcbiAgT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PlxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS0nICsga2V5LCBjb2xvcnNBcnJbaW5kZXhdKVxuICApO1xuICBvblRoZW1lQ2hhbmdlKCk7XG59O1xuXG5jb25zdCBvblRoZW1lQ2hhbmdlID0gKCkgPT4ge1xuICBjb25zdCBpY29uOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKTtcbiAgY29uc3QgYnRuU2V0VGhlbWU6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1zZXQtdGhlbWUnKTtcbiAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCk7XG5cbiAgaWYgKGljb24pIGljb24uc3JjID0gbW9kZSA9PT0gQ29uc3RhbnRzLlRIRU1FX0xJR0hUX0lEID8gJ2ltYWdlcy9pY29uLnN2ZycgOiAnaW1hZ2VzL2ljb24tZGFyay5zdmcnO1xuICBpZiAoYnRuU2V0VGhlbWUgJiYgYnRuU2V0VGhlbWUucXVlcnlTZWxlY3Rvcignc3BhbicpKSB7XG4gICAgYnRuU2V0VGhlbWUucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gbW9kZSA9PT0gQ29uc3RhbnRzLlRIRU1FX0xJR0hUX0lEID8gJ3N1bm55JyA6ICdkYXJrX21vZGUnO1xuICB9XG59O1xuXG5jb25zdCBjaGFuZ2VUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCk7XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuVEhFTUVfREFSS19JRDpcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCwgQ29uc3RhbnRzLlRIRU1FX0xJR0hUX0lEKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuVEhFTUVfSUQsIENvbnN0YW50cy5USEVNRV9EQVJLX0lEKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHNldFRoZW1lKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VUaGVtZTtcbiIsImNsYXNzIENvbnN0YW50cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBUSEVNRV9JRCA9ICdAZGlzcGxheTp0aGVtZS11dWlkJyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgVEhFTUVfTElHSFRfSUQgPSAnQGRpc3BsYXk6dGhlbWUtbGlnaHQnLFxuICAgIHB1YmxpYyByZWFkb25seSBUSEVNRV9EQVJLX0lEID0gJ0BkaXNwbGF5OnRoZW1lLWRhcmsnXG4gICkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwidHlwZSBUTWFwID0geyB2YWx1ZTogc3RyaW5nOyBjb2RlOiBudW1iZXIgfTtcblxuY29uc3QgbWFwOiBUTWFwW10gPSBbXG4gIHsgY29kZTogMCwgdmFsdWU6ICdhJyB9LFxuICB7IGNvZGU6IDEsIHZhbHVlOiAnVCcgfSxcbiAgeyBjb2RlOiAyLCB2YWx1ZTogJ1UnIH0sXG4gIHsgY29kZTogMywgdmFsdWU6ICdWJyB9LFxuICB7IGNvZGU6IDQsIHZhbHVlOiAnVycgfSxcbiAgeyBjb2RlOiA1LCB2YWx1ZTogJ1gnIH0sXG4gIHsgY29kZTogNiwgdmFsdWU6ICdZJyB9LFxuICB7IGNvZGU6IDcsIHZhbHVlOiAnw6AnIH0sXG4gIHsgY29kZTogOCwgdmFsdWU6ICfDqScgfSxcbiAgeyBjb2RlOiA5LCB2YWx1ZTogJ8OoJyB9LFxuICB7IGNvZGU6IDEwLCB2YWx1ZTogJ8OtJyB9LFxuICB7IGNvZGU6IDExLCB2YWx1ZTogJ8OsJyB9LFxuICB7IGNvZGU6IDEyLCB2YWx1ZTogJ8OzJyB9LFxuICB7IGNvZGU6IDEzLCB2YWx1ZTogJ8OyJyB9LFxuICB7IGNvZGU6IDE0LCB2YWx1ZTogJ8O0JyB9LFxuICB7IGNvZGU6IDE1LCB2YWx1ZTogJ8O6JyB9LFxuICB7IGNvZGU6IDE2LCB2YWx1ZTogJ8O5JyB9LFxuICB7IGNvZGU6IDE3LCB2YWx1ZTogJ8OjJyB9LFxuICB7IGNvZGU6IDE4LCB2YWx1ZTogJ8O1JyB9LFxuICB7IGNvZGU6IDE5LCB2YWx1ZTogJ8OBJyB9LFxuICB7IGNvZGU6IDIwLCB2YWx1ZTogJ8OAJyB9LFxuICB7IGNvZGU6IDIxLCB2YWx1ZTogJ8OJJyB9LFxuICB7IGNvZGU6IDIyLCB2YWx1ZTogJ8OIJyB9LFxuICB7IGNvZGU6IDIzLCB2YWx1ZTogJ8ONJyB9LFxuICB7IGNvZGU6IDI0LCB2YWx1ZTogJ8OMJyB9LFxuICB7IGNvZGU6IDI1LCB2YWx1ZTogJ1onIH0sXG4gIHsgY29kZTogMjYsIHZhbHVlOiAnw4cnIH0sXG4gIHsgY29kZTogMjcsIHZhbHVlOiAnMScgfSxcbiAgeyBjb2RlOiAyOCwgdmFsdWU6ICcyJyB9LFxuICB7IGNvZGU6IDI5LCB2YWx1ZTogJzMnIH0sXG4gIHsgY29kZTogMzAsIHZhbHVlOiAnNCcgfSxcbiAgeyBjb2RlOiAzMSwgdmFsdWU6ICc1JyB9LFxuICB7IGNvZGU6IDMyLCB2YWx1ZTogJ2onIH0sXG4gIHsgY29kZTogMzMsIHZhbHVlOiAnaycgfSxcbiAgeyBjb2RlOiAzNCwgdmFsdWU6ICdsJyB9LFxuICB7IGNvZGU6IDM1LCB2YWx1ZTogJ20nIH0sXG4gIHsgY29kZTogMzYsIHZhbHVlOiAnbicgfSxcbiAgeyBjb2RlOiAzNywgdmFsdWU6ICdvJyB9LFxuICB7IGNvZGU6IDM4LCB2YWx1ZTogJzonIH0sXG4gIHsgY29kZTogMzksIHZhbHVlOiAnPycgfSxcbiAgeyBjb2RlOiA0MCwgdmFsdWU6ICcvJyB9LFxuICB7IGNvZGU6IDQxLCB2YWx1ZTogJ1xcXFwnIH0sXG4gIHsgY29kZTogNDIsIHZhbHVlOiAnfCcgfSxcbiAgeyBjb2RlOiA0MywgdmFsdWU6IFwiJ1wiIH0sXG4gIHsgY29kZTogNDQsIHZhbHVlOiAnXCInIH0sXG4gIHsgY29kZTogNDUsIHZhbHVlOiAnficgfSxcbiAgeyBjb2RlOiA0NiwgdmFsdWU6ICfCqicgfSxcbiAgeyBjb2RlOiA0NywgdmFsdWU6ICfCuicgfSxcbiAgeyBjb2RlOiA0OCwgdmFsdWU6ICfDoScgfSxcbiAgeyBjb2RlOiA0OSwgdmFsdWU6ICdwJyB9LFxuICB7IGNvZGU6IDUwLCB2YWx1ZTogJ3EnIH0sXG4gIHsgY29kZTogNTEsIHZhbHVlOiAncicgfSxcbiAgeyBjb2RlOiA1MiwgdmFsdWU6ICfDkicgfSxcbiAgeyBjb2RlOiA1MywgdmFsdWU6ICfDlCcgfSxcbiAgeyBjb2RlOiA1NCwgdmFsdWU6ICfDmicgfSxcbiAgeyBjb2RlOiA1NSwgdmFsdWU6ICfDmScgfSxcbiAgeyBjb2RlOiA1NiwgdmFsdWU6ICfDgycgfSxcbiAgeyBjb2RlOiA1NywgdmFsdWU6ICfDlScgfSxcbiAgeyBjb2RlOiA1OCwgdmFsdWU6ICcgJyB9LFxuICB7IGNvZGU6IDU5LCB2YWx1ZTogJ8OqJyB9LFxuICB7IGNvZGU6IDYwLCB2YWx1ZTogJ8OKJyB9LFxuICB7IGNvZGU6IDYxLCB2YWx1ZTogJ8OiJyB9LFxuICB7IGNvZGU6IDYyLCB2YWx1ZTogJ8OCJyB9LFxuICB7IGNvZGU6IDYzLCB2YWx1ZTogJ3MnIH0sXG4gIHsgY29kZTogNjQsIHZhbHVlOiAndCcgfSxcbiAgeyBjb2RlOiA2NSwgdmFsdWU6ICd1JyB9LFxuICB7IGNvZGU6IDY2LCB2YWx1ZTogJ3YnIH0sXG4gIHsgY29kZTogNjcsIHZhbHVlOiAnKCcgfSxcbiAgeyBjb2RlOiA2OCwgdmFsdWU6ICcpJyB9LFxuICB7IGNvZGU6IDY5LCB2YWx1ZTogJy0nIH0sXG4gIHsgY29kZTogNzAsIHZhbHVlOiAnXycgfSxcbiAgeyBjb2RlOiA3MSwgdmFsdWU6ICcrJyB9LFxuICB7IGNvZGU6IDcyLCB2YWx1ZTogJz0nIH0sXG4gIHsgY29kZTogNzMsIHZhbHVlOiAnWycgfSxcbiAgeyBjb2RlOiA3NCwgdmFsdWU6ICddJyB9LFxuICB7IGNvZGU6IDc1LCB2YWx1ZTogJ3snIH0sXG4gIHsgY29kZTogNzYsIHZhbHVlOiAnfScgfSxcbiAgeyBjb2RlOiA3NywgdmFsdWU6ICfCtCcgfSxcbiAgeyBjb2RlOiA3OCwgdmFsdWU6ICd3JyB9LFxuICB7IGNvZGU6IDc5LCB2YWx1ZTogJ3gnIH0sXG4gIHsgY29kZTogODAsIHZhbHVlOiAneScgfSxcbiAgeyBjb2RlOiA4MSwgdmFsdWU6ICd6JyB9LFxuICB7IGNvZGU6IDgyLCB2YWx1ZTogJ8OnJyB9LFxuICB7IGNvZGU6IDgzLCB2YWx1ZTogJ0EnIH0sXG4gIHsgY29kZTogODQsIHZhbHVlOiAnQicgfSxcbiAgeyBjb2RlOiA4NSwgdmFsdWU6ICdDJyB9LFxuICB7IGNvZGU6IDg2LCB2YWx1ZTogJ0QnIH0sXG4gIHsgY29kZTogODcsIHZhbHVlOiAnRScgfSxcbiAgeyBjb2RlOiA4OCwgdmFsdWU6ICdGJyB9LFxuICB7IGNvZGU6IDg5LCB2YWx1ZTogJ0cnIH0sXG4gIHsgY29kZTogOTAsIHZhbHVlOiAnSCcgfSxcbiAgeyBjb2RlOiA5MSwgdmFsdWU6ICdJJyB9LFxuICB7IGNvZGU6IDkyLCB2YWx1ZTogJ0onIH0sXG4gIHsgY29kZTogOTMsIHZhbHVlOiAnSycgfSxcbiAgeyBjb2RlOiA5NCwgdmFsdWU6ICdMJyB9LFxuICB7IGNvZGU6IDk1LCB2YWx1ZTogJ00nIH0sXG4gIHsgY29kZTogOTYsIHZhbHVlOiAnTicgfSxcbiAgeyBjb2RlOiA5NywgdmFsdWU6ICdPJyB9LFxuICB7IGNvZGU6IDk4LCB2YWx1ZTogJ1AnIH0sXG4gIHsgY29kZTogOTksIHZhbHVlOiAnUScgfSxcbiAgeyBjb2RlOiAxMDAsIHZhbHVlOiAnYicgfSxcbiAgeyBjb2RlOiAxMDEsIHZhbHVlOiAnYycgfSxcbiAgeyBjb2RlOiAxMDIsIHZhbHVlOiAnZCcgfSxcbiAgeyBjb2RlOiAxMDMsIHZhbHVlOiAnZScgfSxcbiAgeyBjb2RlOiAxMDQsIHZhbHVlOiAnZicgfSxcbiAgeyBjb2RlOiAxMDUsIHZhbHVlOiAnZycgfSxcbiAgeyBjb2RlOiAxMDYsIHZhbHVlOiAnaCcgfSxcbiAgeyBjb2RlOiAxMDcsIHZhbHVlOiAnaScgfSxcbiAgeyBjb2RlOiAxMDgsIHZhbHVlOiAnUicgfSxcbiAgeyBjb2RlOiAxMDksIHZhbHVlOiAnUycgfSxcbiAgeyBjb2RlOiAxMTAsIHZhbHVlOiAnNicgfSxcbiAgeyBjb2RlOiAxMTEsIHZhbHVlOiAnNycgfSxcbiAgeyBjb2RlOiAxMTIsIHZhbHVlOiAnOCcgfSxcbiAgeyBjb2RlOiAxMTMsIHZhbHVlOiAnOScgfSxcbiAgeyBjb2RlOiAxMTQsIHZhbHVlOiAnMCcgfSxcbiAgeyBjb2RlOiAxMTUsIHZhbHVlOiAnIScgfSxcbiAgeyBjb2RlOiAxMTYsIHZhbHVlOiAnQCcgfSxcbiAgeyBjb2RlOiAxMTcsIHZhbHVlOiAnIycgfSxcbiAgeyBjb2RlOiAxMTgsIHZhbHVlOiAnJCcgfSxcbiAgeyBjb2RlOiAxMTksIHZhbHVlOiAnJScgfSxcbiAgeyBjb2RlOiAxMjAsIHZhbHVlOiAnJicgfSxcbiAgeyBjb2RlOiAxMjEsIHZhbHVlOiAnKicgfSxcbiAgeyBjb2RlOiAxMjIsIHZhbHVlOiAnYCcgfSxcbiAgeyBjb2RlOiAxMjMsIHZhbHVlOiAnLCcgfSxcbiAgeyBjb2RlOiAxMjQsIHZhbHVlOiAnLicgfSxcbiAgeyBjb2RlOiAxMjUsIHZhbHVlOiAnPCcgfSxcbiAgeyBjb2RlOiAxMjYsIHZhbHVlOiAnPicgfSxcbiAgeyBjb2RlOiAxMjcsIHZhbHVlOiAnOycgfSxcbiAgeyBjb2RlOiAxMjgsIHZhbHVlOiAnw5MnIH0sXG4gIHsgY29kZTogMTI5LCB2YWx1ZTogJ8OxJyB9LFxuICB7IGNvZGU6IDEzMCwgdmFsdWU6ICfDkScgfSxcbiAgeyBjb2RlOiAxMzEsIHZhbHVlOiAnw64nIH0sXG4gIHsgY29kZTogMTMyLCB2YWx1ZTogJ8OOJyB9LFxuICB7IGNvZGU6IDEzMywgdmFsdWU6ICfDtycgfSxcbiAgeyBjb2RlOiAxMzQsIHZhbHVlOiAnYScgfSxcbiAgeyBjb2RlOiAxMzUsIHZhbHVlOiAnVCcgfSxcbiAgeyBjb2RlOiAxMzYsIHZhbHVlOiAnVScgfSxcbiAgeyBjb2RlOiAxMzcsIHZhbHVlOiAnVicgfSxcbiAgeyBjb2RlOiAxMzgsIHZhbHVlOiAnVycgfSxcbiAgeyBjb2RlOiAxMzksIHZhbHVlOiAnWCcgfSxcbiAgeyBjb2RlOiAxNDAsIHZhbHVlOiAnWScgfSxcbiAgeyBjb2RlOiAxNDEsIHZhbHVlOiAnw6AnIH0sXG4gIHsgY29kZTogMTQyLCB2YWx1ZTogJ8OpJyB9LFxuICB7IGNvZGU6IDE0MywgdmFsdWU6ICfDqCcgfSxcbiAgeyBjb2RlOiAxNDQsIHZhbHVlOiAnw60nIH0sXG4gIHsgY29kZTogMTQ1LCB2YWx1ZTogJ8OsJyB9LFxuICB7IGNvZGU6IDE0NiwgdmFsdWU6ICfDsycgfSxcbiAgeyBjb2RlOiAxNDcsIHZhbHVlOiAnw7InIH0sXG4gIHsgY29kZTogMTQ4LCB2YWx1ZTogJ8O0JyB9LFxuICB7IGNvZGU6IDE0OSwgdmFsdWU6ICfDuicgfSxcbiAgeyBjb2RlOiAxNTAsIHZhbHVlOiAnw7knIH0sXG4gIHsgY29kZTogMTUxLCB2YWx1ZTogJ8OjJyB9LFxuICB7IGNvZGU6IDE1MiwgdmFsdWU6ICfDtScgfSxcbiAgeyBjb2RlOiAxNTMsIHZhbHVlOiAnw4EnIH0sXG4gIHsgY29kZTogMTU0LCB2YWx1ZTogJ8OAJyB9LFxuICB7IGNvZGU6IDE1NSwgdmFsdWU6ICfDiScgfSxcbiAgeyBjb2RlOiAxNTYsIHZhbHVlOiAnw4gnIH0sXG4gIHsgY29kZTogMTU3LCB2YWx1ZTogJ8ONJyB9LFxuICB7IGNvZGU6IDE1OCwgdmFsdWU6ICfDjCcgfSxcbiAgeyBjb2RlOiAxNTksIHZhbHVlOiAnWicgfSxcbiAgeyBjb2RlOiAxNjAsIHZhbHVlOiAnw4cnIH0sXG4gIHsgY29kZTogMTYxLCB2YWx1ZTogJzEnIH0sXG4gIHsgY29kZTogMTYyLCB2YWx1ZTogJzInIH0sXG4gIHsgY29kZTogMTYzLCB2YWx1ZTogJzMnIH0sXG4gIHsgY29kZTogMTY0LCB2YWx1ZTogJzQnIH0sXG4gIHsgY29kZTogMTY1LCB2YWx1ZTogJzUnIH0sXG4gIHsgY29kZTogMTY2LCB2YWx1ZTogJ2onIH0sXG4gIHsgY29kZTogMTY3LCB2YWx1ZTogJ2snIH0sXG4gIHsgY29kZTogMTY4LCB2YWx1ZTogJ2wnIH0sXG4gIHsgY29kZTogMTY5LCB2YWx1ZTogJ20nIH0sXG4gIHsgY29kZTogMTcwLCB2YWx1ZTogJ24nIH0sXG4gIHsgY29kZTogMTcxLCB2YWx1ZTogJ28nIH0sXG4gIHsgY29kZTogMTcyLCB2YWx1ZTogJzonIH0sXG4gIHsgY29kZTogMTczLCB2YWx1ZTogJz8nIH0sXG4gIHsgY29kZTogMTc0LCB2YWx1ZTogJy8nIH0sXG4gIHsgY29kZTogMTc1LCB2YWx1ZTogJ1xcXFwnIH0sXG4gIHsgY29kZTogMTc2LCB2YWx1ZTogJ3wnIH0sXG4gIHsgY29kZTogMTc3LCB2YWx1ZTogXCInXCIgfSxcbiAgeyBjb2RlOiAxNzgsIHZhbHVlOiAnXCInIH0sXG4gIHsgY29kZTogMTc5LCB2YWx1ZTogJ34nIH0sXG4gIHsgY29kZTogMTgwLCB2YWx1ZTogJ8KqJyB9LFxuICB7IGNvZGU6IDE4MSwgdmFsdWU6ICfCuicgfSxcbiAgeyBjb2RlOiAxODIsIHZhbHVlOiAnw6EnIH0sXG4gIHsgY29kZTogMTgzLCB2YWx1ZTogJ3AnIH0sXG4gIHsgY29kZTogMTg0LCB2YWx1ZTogJ3EnIH0sXG4gIHsgY29kZTogMTg1LCB2YWx1ZTogJ3InIH0sXG4gIHsgY29kZTogMTg2LCB2YWx1ZTogJ8OSJyB9LFxuICB7IGNvZGU6IDE4NywgdmFsdWU6ICfDlCcgfSxcbiAgeyBjb2RlOiAxODgsIHZhbHVlOiAnw5onIH0sXG4gIHsgY29kZTogMTg5LCB2YWx1ZTogJ8OZJyB9LFxuICB7IGNvZGU6IDE5MCwgdmFsdWU6ICfDgycgfSxcbiAgeyBjb2RlOiAxOTEsIHZhbHVlOiAnw5UnIH0sXG4gIHsgY29kZTogMTkyLCB2YWx1ZTogJyAnIH0sXG4gIHsgY29kZTogMTkzLCB2YWx1ZTogJ8OqJyB9LFxuICB7IGNvZGU6IDE5NCwgdmFsdWU6ICfDiicgfSxcbiAgeyBjb2RlOiAxOTUsIHZhbHVlOiAnw6InIH0sXG4gIHsgY29kZTogMTk2LCB2YWx1ZTogJ8OCJyB9LFxuICB7IGNvZGU6IDE5NywgdmFsdWU6ICdzJyB9LFxuICB7IGNvZGU6IDE5OCwgdmFsdWU6ICd0JyB9LFxuICB7IGNvZGU6IDE5OSwgdmFsdWU6ICd1JyB9LFxuICB7IGNvZGU6IDIwMCwgdmFsdWU6ICd2JyB9LFxuICB7IGNvZGU6IDIwMSwgdmFsdWU6ICcoJyB9LFxuICB7IGNvZGU6IDIwMiwgdmFsdWU6ICcpJyB9LFxuICB7IGNvZGU6IDIwMywgdmFsdWU6ICctJyB9LFxuICB7IGNvZGU6IDIwNCwgdmFsdWU6ICdfJyB9LFxuICB7IGNvZGU6IDIwNSwgdmFsdWU6ICcrJyB9LFxuICB7IGNvZGU6IDIwNiwgdmFsdWU6ICc9JyB9LFxuICB7IGNvZGU6IDIwNywgdmFsdWU6ICdbJyB9LFxuICB7IGNvZGU6IDIwOCwgdmFsdWU6ICddJyB9LFxuICB7IGNvZGU6IDIwOSwgdmFsdWU6ICd7JyB9LFxuICB7IGNvZGU6IDIxMCwgdmFsdWU6ICd9JyB9LFxuICB7IGNvZGU6IDIxMSwgdmFsdWU6ICfCtCcgfSxcbiAgeyBjb2RlOiAyMTIsIHZhbHVlOiAndycgfSxcbiAgeyBjb2RlOiAyMTMsIHZhbHVlOiAneCcgfSxcbiAgeyBjb2RlOiAyMTQsIHZhbHVlOiAneScgfSxcbiAgeyBjb2RlOiAyMTUsIHZhbHVlOiAneicgfSxcbiAgeyBjb2RlOiAyMTYsIHZhbHVlOiAnw6cnIH0sXG4gIHsgY29kZTogMjE3LCB2YWx1ZTogJ0EnIH0sXG4gIHsgY29kZTogMjE4LCB2YWx1ZTogJ0InIH0sXG4gIHsgY29kZTogMjE5LCB2YWx1ZTogJ0MnIH0sXG4gIHsgY29kZTogMjIwLCB2YWx1ZTogJ0QnIH0sXG4gIHsgY29kZTogMjIxLCB2YWx1ZTogJ0UnIH0sXG4gIHsgY29kZTogMjIyLCB2YWx1ZTogJ0YnIH0sXG4gIHsgY29kZTogMjIzLCB2YWx1ZTogJ0cnIH0sXG4gIHsgY29kZTogMjI0LCB2YWx1ZTogJ0gnIH0sXG4gIHsgY29kZTogMjI1LCB2YWx1ZTogJ0knIH0sXG4gIHsgY29kZTogMjI2LCB2YWx1ZTogJ0onIH0sXG4gIHsgY29kZTogMjI3LCB2YWx1ZTogJ0snIH0sXG4gIHsgY29kZTogMjI4LCB2YWx1ZTogJ0wnIH0sXG4gIHsgY29kZTogMjI5LCB2YWx1ZTogJ00nIH0sXG4gIHsgY29kZTogMjMwLCB2YWx1ZTogJ04nIH0sXG4gIHsgY29kZTogMjMxLCB2YWx1ZTogJ08nIH0sXG4gIHsgY29kZTogMjMyLCB2YWx1ZTogJ1AnIH0sXG4gIHsgY29kZTogMjMzLCB2YWx1ZTogJ1EnIH0sXG4gIHsgY29kZTogMjM0LCB2YWx1ZTogJ2InIH0sXG4gIHsgY29kZTogMjM1LCB2YWx1ZTogJ2MnIH0sXG4gIHsgY29kZTogMjM2LCB2YWx1ZTogJ2QnIH0sXG4gIHsgY29kZTogMjM3LCB2YWx1ZTogJ2UnIH0sXG4gIHsgY29kZTogMjM4LCB2YWx1ZTogJ2YnIH0sXG4gIHsgY29kZTogMjM5LCB2YWx1ZTogJ2cnIH0sXG4gIHsgY29kZTogMjQwLCB2YWx1ZTogJ2gnIH0sXG4gIHsgY29kZTogMjQxLCB2YWx1ZTogJ2knIH0sXG4gIHsgY29kZTogMjQyLCB2YWx1ZTogJ1InIH0sXG4gIHsgY29kZTogMjQzLCB2YWx1ZTogJ1MnIH0sXG4gIHsgY29kZTogMjQ0LCB2YWx1ZTogJzYnIH0sXG4gIHsgY29kZTogMjQ1LCB2YWx1ZTogJzcnIH0sXG4gIHsgY29kZTogMjQ2LCB2YWx1ZTogJzgnIH0sXG4gIHsgY29kZTogMjQ3LCB2YWx1ZTogJzknIH0sXG4gIHsgY29kZTogMjQ4LCB2YWx1ZTogJzAnIH0sXG4gIHsgY29kZTogMjQ5LCB2YWx1ZTogJyEnIH0sXG4gIHsgY29kZTogMjUwLCB2YWx1ZTogJ0AnIH0sXG4gIHsgY29kZTogMjUxLCB2YWx1ZTogJyMnIH0sXG4gIHsgY29kZTogMjUyLCB2YWx1ZTogJyQnIH0sXG4gIHsgY29kZTogMjUzLCB2YWx1ZTogJyUnIH0sXG4gIHsgY29kZTogMjU0LCB2YWx1ZTogJyYnIH0sXG4gIHsgY29kZTogMjU1LCB2YWx1ZTogJyonIH0sXG4gIHsgY29kZTogMjU2LCB2YWx1ZTogJ2AnIH0sXG4gIHsgY29kZTogMjU3LCB2YWx1ZTogJywnIH0sXG4gIHsgY29kZTogMjU4LCB2YWx1ZTogJy4nIH0sXG4gIHsgY29kZTogMjU5LCB2YWx1ZTogJzwnIH0sXG4gIHsgY29kZTogMjYwLCB2YWx1ZTogJz4nIH0sXG4gIHsgY29kZTogMjYxLCB2YWx1ZTogJzsnIH0sXG4gIHsgY29kZTogMjYyLCB2YWx1ZTogJ8OTJyB9LFxuICB7IGNvZGU6IDI2MywgdmFsdWU6ICfDsScgfSxcbiAgeyBjb2RlOiAyNjQsIHZhbHVlOiAnw5EnIH0sXG4gIHsgY29kZTogMjY1LCB2YWx1ZTogJ8OuJyB9LFxuICB7IGNvZGU6IDI2NiwgdmFsdWU6ICfDjicgfSxcbiAgeyBjb2RlOiAyNjcsIHZhbHVlOiAnw7cnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtYXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IGNoYW5nZVRoZW1lLCB7IGluaXRUaGVtZSB9IGZyb20gJy4uL3Jlc291cmNlcy9jb2xvcnMnO1xuaW1wb3J0IG1hcCBmcm9tICcuLi91dGlscy9tYXAnO1xuaW1wb3J0IGNpcGhlciBmcm9tICcuL21vZHVsZXMvYXBvbGxvL2NpcGhlcic7XG5pbXBvcnQgZW5jcnlwdCBmcm9tICcuL21vZHVsZXMvZW5jcnlwdCc7XG5cbmNvbnN0IGJ0blNldFRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1zZXQtdGhlbWUnKTtcbmNvbnN0IGNpcGhlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpcGhlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbmNvbnN0IGVuY3J5cHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3InKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGRlY3J5cHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGMnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGNvbnRhaW5lck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lci1tb2RhbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgYnRuQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jb3B5JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBtb2RhbE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtbWVzc2FnZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuXG5pZiAoYnRuU2V0VGhlbWUpIGJ0blNldFRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhbmdlVGhlbWUoKSk7XG5cbmlmIChjb250YWluZXJNb2RhbCkge1xuICBjb250YWluZXJNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgaWQgPSAodGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5pZDtcbiAgICBpZiAoXG4gICAgICBpZCA9PT0gY29udGFpbmVyTW9kYWwuaWQgfHxcbiAgICAgIGlkID09PSBidG5Db3B5LmlkIHx8XG4gICAgICBidG5Db3B5LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5jbGFzc0xpc3QuY29udGFpbnMoYnRuQ29weS5pZClcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lck1vZGFsLnN0eWxlLnRvcCA9ICctMTAwdmgnO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChidG5Db3B5ICYmIGJ0bkNvcHkucXVlcnlTZWxlY3Rvcignc3BhbicpKSB7XG4gIGJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGJ0bkNvcHkucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzcGFuLnRleHRDb250ZW50O1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnY2hlY2tfc21hbGwnO1xuICAgIGNvbnN0IHRleHQgPSBtb2RhbE1lc3NhZ2UudGV4dENvbnRlbnQ7XG4gICAgd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHNwYW4udGV4dENvbnRlbnQgPSBjb250ZW50KSwgMTUwMCk7XG4gIH0pO1xufVxuXG5pZiAoZW5jcnlwdEJ1dHRvbiAmJiBjaXBoZXJJbnB1dCAmJiBkZWNyeXB0QnV0dG9uKSB7XG4gIGNpcGhlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoKGV2ZW50LnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSk7XG4gICAgaWYgKHZhbHVlIDwgMCB8fCB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSByZXR1cm4gKGNpcGhlcklucHV0LnZhbHVlID0gJycgKyAxKTtcbiAgICBpZiAodmFsdWUgPiAxMDApIHJldHVybiAoY2lwaGVySW5wdXQudmFsdWUgPSAnMTAwJyk7XG4gICAgY2lwaGVySW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5hYnModmFsdWUpKTtcbiAgfSk7XG5cbiAgZW5jcnlwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjaXBoZXIgPSBOdW1iZXIoY2lwaGVySW5wdXQudmFsdWUpO1xuICAgIG1vZGFsTWVzc2FnZS50ZXh0Q29udGVudCA9IGVuY3J5cHQoaW5wdXQudmFsdWUsIHR5cGVvZiBjaXBoZXIgPT09ICdudW1iZXInICYmIGNpcGhlciAhPT0gMCA/IGNpcGhlciA6IDIpO1xuICAgIGNvbnRhaW5lck1vZGFsLnN0eWxlLnRvcCA9ICcwJztcbiAgfSk7XG5cbiAgZGVjcnlwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjaXBoZXIgPSBOdW1iZXIoY2lwaGVySW5wdXQudmFsdWUpO1xuICAgIG1vZGFsTWVzc2FnZS50ZXh0Q29udGVudCA9IGVuY3J5cHQoXG4gICAgICBpbnB1dC52YWx1ZSxcbiAgICAgIHR5cGVvZiBjaXBoZXIgPT09ICdudW1iZXInICYmIGNpcGhlciAhPT0gMCA/IGNpcGhlciA6IDIsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb250YWluZXJNb2RhbC5zdHlsZS50b3AgPSAnMCc7XG4gIH0pO1xufVxuXG5pbml0VGhlbWUoKTtcblxuY29uc3QgYyA9IGNpcGhlcignT2zDoSBtdW5kbyEgSGVsbG8gd29ybGQuJywgMTApO1xuY29uc29sZS5sb2coJ2NyeXB0OiAnLCBjKTtcbmNvbnNvbGUubG9nKCdkY3J5cHQ6ICcsIGNpcGhlcihjLCAxMCwgdHJ1ZSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9