/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

//import {scrolledHeader} from "./js/header.js";
//import {Comment} from './js/comments.js'
var d = document,
    itemBox = d.querySelectorAll('.product__item'),
    // блок каждого товара
cartCont = d.getElementById('cart'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий

function addEvent(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  }

  return false;
} // Получаем данные из LocalStorage


function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
} // Записываем данные в LocalStorage


function setCartData(o) {
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
} // Добавляем товар в корзину


function addToCart(e) {
  this.disabled = true; // блокируем кнопку на время операции с корзиной

  var cartData = getCartData() || {},
      // получаем данные корзины или создаём новый объект, если данных еще нет
  parentBox = this.parentNode,
      // родительский элемент кнопки &quot;Добавить в корзину&quot;
  itemId = this.getAttribute('data-id'),
      // ID товара
  itemTitle = parentBox.querySelector('.product__title').innerHTML,
      // название товара
  itemPrice = parentBox.querySelector('.product__cost').innerHTML; // стоимость товара

  if (cartData.hasOwnProperty(itemId)) {
    // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else {
    // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  } // Обновляем данные в LocalStorage


  if (!setCartData(cartData)) {
    this.disabled = false; // разблокируем кнопку после обновления LS
    // cartCont.innerHTML = 'Товар добавлен в корзину.';

    setTimeout(function () {// cartCont.innerHTML = 'Продолжить покупки...';
    }, 1000);
  }

  return false;
} // Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;


for (var i = 0; i < itemBox.length; i++) {
  addEvent(itemBox[i].querySelector('.product__button'), 'click', addToCart);
} // Открываем корзину со списком добавленных товаров


function openCart(e) {
  var cartData = getCartData(),
      // вытаскиваем все данные корзины
  totalItems = '';
  console.log(JSON.stringify(cartData)); // если что-то в корзине уже есть, начинаем формировать данные для вывода

  if (cartData == null) {
    totalItems = '<table class="shopping_list">' + '<tr><th>Наименование</th>' + '<th>Цена</th><th>Кол-во</th>' + '</tr>';

    for (var items in cartData) {
      totalItems += '<tr>';
      console.log('Items', items);

      for (var i = 0; i < cartData[items].length; i++) {
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }

      totalItems += '</tr>';
    }

    totalItems += '<table>';
    cartCont.innerHTML = totalItems;
  } else {// если в корзине пусто, то сигнализируем об этом
    //cartCont.innerHTML = 'В корзине пусто!';
  }

  return false;
}
/* Открыть корзину */


addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */

addEvent(d.getElementById('clear_cart'), 'click', function (e) {
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очишена.';
});
console.log('LocalStorage', localStorage);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map