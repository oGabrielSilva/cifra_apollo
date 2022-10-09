/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUN0QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxXQUFXLEdBQUcscUJBQU8sRUFBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDdEMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxZQUFZLENBQUMsV0FBVyxHQUFHLHFCQUFPLEVBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQ1gsT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN2RCxJQUFJLENBQ0wsQ0FBQztRQUNGLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztDQUNKO0FBRUQsc0JBQVMsR0FBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lmcmFhcG9sbG8vLi9zcmMvYXBwL21vZHVsZXMvZW5jcnlwdC50cyIsIndlYnBhY2s6Ly9jaWZyYWFwb2xsby8uL3NyYy9yZXNvdXJjZXMvY29sb3JzLnRzIiwid2VicGFjazovL2NpZnJhYXBvbGxvLy4vc3JjL3V0aWxzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9jaWZyYWFwb2xsby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaWZyYWFwb2xsby8uL3NyYy9hcHAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbmNyeXB0ID0gKHRleHQ6IHN0cmluZywgY2lwaGVyOiBudW1iZXIsIGRlY3J5cHQ/OiBib29sZWFuKSA9PiB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KCcnKVxuICAgIC5tYXAoKHQpID0+IHQuY2hhckNvZGVBdCgwKSlcbiAgICAubWFwKChjb2RlKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY3J5cHQgPyBjb2RlIC0gY2lwaGVyIDogY29kZSArIGNpcGhlcikpXG4gICAgLmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5jcnlwdDtcbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvQ29uc3RhbnRzJztcblxuZXhwb3J0IHR5cGUgVENvbG9ycyA9IHtcbiAgYmc6IHN0cmluZztcbiAgYmdMaWdodDogc3RyaW5nO1xuICB0ZXh0VGl0bGU6IHN0cmluZztcbiAgdGV4dE9uVmFyaWFudDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhcmlhbnQ6IHN0cmluZztcbiAgbW9kZTogJ2xpZ2h0JyB8ICdkYXJrJztcbn07XG5cbmNvbnN0IGxpZ2h0ID0ge1xuICBiZzogJyNiMmI3YzYnLFxuICBiZ0xpZ2h0OiAnI2Q5ZDlkOScsXG4gIHRleHRUaXRsZTogJyMwYTBhMGEnLFxuICB0ZXh0T25WYXJpYW50OiAnI2ZjZmNmYycsXG4gIHRleHQ6ICcjMmUyZTJlJyxcbiAgdmFyaWFudDogJyNmZjAwMDAnLFxuICBtb2RlOiAnbGlnaHQnLFxufTtcblxuY29uc3QgZGFyayA9IHtcbiAgYmc6ICcjMTIxNDFiJyxcbiAgYmdMaWdodDogJyMyMzI4MzgnLFxuICB0ZXh0VGl0bGU6ICcjZmNmY2ZjJyxcbiAgdGV4dE9uVmFyaWFudDogJyNmY2ZjZmMnLFxuICB0ZXh0OiAnI2JkYmRiZCcsXG4gIHZhcmlhbnQ6ICcjZmYwMDAwJyxcbiAgbW9kZTogJ2RhcmsnLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCk7XG5cbiAgaWYgKCFtb2RlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuVEhFTUVfSUQsIENvbnN0YW50cy5USEVNRV9EQVJLX0lEKTtcblxuICBzZXRUaGVtZSgpO1xufTtcblxuY29uc3Qgc2V0VGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuVEhFTUVfSUQpO1xuXG4gIGNvbnN0IGNvbG9ycyA9IG1vZGUgPT09IENvbnN0YW50cy5USEVNRV9EQVJLX0lEID8gZGFyayA6IGxpZ2h0O1xuICBkZWxldGUgY29sb3JzLm1vZGU7XG4gIGNvbnN0IGNvbG9yc0FyciA9IE9iamVjdC52YWx1ZXMoY29sb3JzKTtcbiAgT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PlxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS0nICsga2V5LCBjb2xvcnNBcnJbaW5kZXhdKVxuICApO1xuICBvblRoZW1lQ2hhbmdlKCk7XG59O1xuXG5jb25zdCBvblRoZW1lQ2hhbmdlID0gKCkgPT4ge1xuICBjb25zdCBpY29uOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKTtcbiAgY29uc3QgYnRuU2V0VGhlbWU6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1zZXQtdGhlbWUnKTtcbiAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCk7XG5cbiAgaWYgKGljb24pIGljb24uc3JjID0gbW9kZSA9PT0gQ29uc3RhbnRzLlRIRU1FX0xJR0hUX0lEID8gJ2ltYWdlcy9pY29uLnN2ZycgOiAnaW1hZ2VzL2ljb24tZGFyay5zdmcnO1xuICBpZiAoYnRuU2V0VGhlbWUgJiYgYnRuU2V0VGhlbWUucXVlcnlTZWxlY3Rvcignc3BhbicpKSB7XG4gICAgYnRuU2V0VGhlbWUucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gbW9kZSA9PT0gQ29uc3RhbnRzLlRIRU1FX0xJR0hUX0lEID8gJ3N1bm55JyA6ICdkYXJrX21vZGUnO1xuICB9XG59O1xuXG5jb25zdCBjaGFuZ2VUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCk7XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuVEhFTUVfREFSS19JRDpcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5USEVNRV9JRCwgQ29uc3RhbnRzLlRIRU1FX0xJR0hUX0lEKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuVEhFTUVfSUQsIENvbnN0YW50cy5USEVNRV9EQVJLX0lEKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHNldFRoZW1lKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VUaGVtZTtcbiIsImNsYXNzIENvbnN0YW50cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBUSEVNRV9JRCA9ICdAZGlzcGxheTp0aGVtZS11dWlkJyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgVEhFTUVfTElHSFRfSUQgPSAnQGRpc3BsYXk6dGhlbWUtbGlnaHQnLFxuICAgIHB1YmxpYyByZWFkb25seSBUSEVNRV9EQVJLX0lEID0gJ0BkaXNwbGF5OnRoZW1lLWRhcmsnXG4gICkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCBjaGFuZ2VUaGVtZSwgeyBpbml0VGhlbWUgfSBmcm9tICcuLi9yZXNvdXJjZXMvY29sb3JzJztcbmltcG9ydCBlbmNyeXB0IGZyb20gJy4vbW9kdWxlcy9lbmNyeXB0JztcblxuY29uc3QgYnRuU2V0VGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXNldC10aGVtZScpO1xuY29uc3QgY2lwaGVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2lwaGVyJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuY29uc3QgZW5jcnlwdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZGVjcnlwdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyLW1vZGFsJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBidG5Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWNvcHknKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IG1vZGFsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1tZXNzYWdlJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5cbmlmIChidG5TZXRUaGVtZSkgYnRuU2V0VGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VUaGVtZSgpKTtcblxuaWYgKGNvbnRhaW5lck1vZGFsKSB7XG4gIGNvbnRhaW5lck1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBpZCA9ICh0YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmlkO1xuICAgIGlmIChcbiAgICAgIGlkID09PSBjb250YWluZXJNb2RhbC5pZCB8fFxuICAgICAgaWQgPT09IGJ0bkNvcHkuaWQgfHxcbiAgICAgIGJ0bkNvcHkucXVlcnlTZWxlY3Rvcignc3BhbicpLmNsYXNzTGlzdC5jb250YWlucyhidG5Db3B5LmlkKVxuICAgICkge1xuICAgICAgY29udGFpbmVyTW9kYWwuc3R5bGUudG9wID0gJy0xMDB2aCc7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKGJ0bkNvcHkgJiYgYnRuQ29weS5xdWVyeVNlbGVjdG9yKCdzcGFuJykpIHtcbiAgYnRuQ29weS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzcGFuID0gYnRuQ29weS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgY29uc3QgY29udGVudCA9IHNwYW4udGV4dENvbnRlbnQ7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9ICdjaGVja19zbWFsbCc7XG4gICAgY29uc3QgdGV4dCA9IG1vZGFsTWVzc2FnZS50ZXh0Q29udGVudDtcbiAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAoc3Bhbi50ZXh0Q29udGVudCA9IGNvbnRlbnQpLCAxNTAwKTtcbiAgfSk7XG59XG5cbmlmIChlbmNyeXB0QnV0dG9uICYmIGNpcGhlcklucHV0ICYmIGRlY3J5cHRCdXR0b24pIHtcbiAgY2lwaGVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcigoZXZlbnQudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlKTtcbiAgICBpZiAodmFsdWUgPCAwIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHJldHVybiAoY2lwaGVySW5wdXQudmFsdWUgPSAnJyArIDEpO1xuICAgIGlmICh2YWx1ZSA+IDEwMCkgcmV0dXJuIChjaXBoZXJJbnB1dC52YWx1ZSA9ICcxMDAnKTtcbiAgICBjaXBoZXJJbnB1dC52YWx1ZSA9IFN0cmluZyhNYXRoLmFicyh2YWx1ZSkpO1xuICB9KTtcblxuICBlbmNyeXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNpcGhlciA9IE51bWJlcihjaXBoZXJJbnB1dC52YWx1ZSk7XG4gICAgbW9kYWxNZXNzYWdlLnRleHRDb250ZW50ID0gZW5jcnlwdChpbnB1dC52YWx1ZSwgdHlwZW9mIGNpcGhlciA9PT0gJ251bWJlcicgJiYgY2lwaGVyICE9PSAwID8gY2lwaGVyIDogMik7XG4gICAgY29udGFpbmVyTW9kYWwuc3R5bGUudG9wID0gJzAnO1xuICB9KTtcblxuICBkZWNyeXB0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNpcGhlciA9IE51bWJlcihjaXBoZXJJbnB1dC52YWx1ZSk7XG4gICAgbW9kYWxNZXNzYWdlLnRleHRDb250ZW50ID0gZW5jcnlwdChcbiAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgdHlwZW9mIGNpcGhlciA9PT0gJ251bWJlcicgJiYgY2lwaGVyICE9PSAwID8gY2lwaGVyIDogMixcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGNvbnRhaW5lck1vZGFsLnN0eWxlLnRvcCA9ICcwJztcbiAgfSk7XG59XG5cbmluaXRUaGVtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9