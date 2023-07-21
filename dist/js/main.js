"use strict";

//Burger

var burgerBtn = document.querySelector(".header__burger");
var navBtns = document.querySelectorAll(".header__nav-text");
var nav = document.querySelector(".header__nav");
navBtns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (burgerBtn.classList.contains("active")) {
      nav.classList.toggle("open");
      burgerBtn.classList.toggle("active");
      document.querySelector("body").style.overflow = "";
    }
  });
});
burgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  burgerBtn.classList.toggle("active");
  burgerBtn.classList.contains("active") ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "";
  nav.classList.toggle("open");
});

//Slider

var items = document.querySelector(".slider__body-items");
var currentEl = document.querySelector(".slider__controller-counter-current");
var outOfEl = document.querySelector(".slider__controller-counter-outof");
var toLeft = document.querySelector(".slider__controller-arrow_left");
var toRight = document.querySelector(".slider__controller-arrow_right");
var amountOfItems = document.querySelectorAll(".slider__body-items-item").length;
outOfEl.innerHTML = "/".concat(amountOfItems);
var current = 1;
var $PAGE_WIDTH = "120";
var toRightHandle = function toRightHandle() {
  current === amountOfItems ? current = 1 : current++;
  currentEl.innerHTML = current;
  items.style.transform = "translateX(".concat((current - 1) * -$PAGE_WIDTH, "%)");
};
toRight.addEventListener("click", toRightHandle);
var toLeftHandle = function toLeftHandle() {
  current === 1 ? current = amountOfItems : current--;
  currentEl.innerHTML = current;
  items.style.transform = "translateX(".concat((current - 1) * -$PAGE_WIDTH, "%)");
};
toLeft.addEventListener("click", toLeftHandle);
"use strict";

(function (w, d, s, o) {
  var j = d.createElement(s);
  j.async = true;
  j.src = "//script.marquiz.ru/v2.js";
  j.onload = function () {
    if (document.readyState !== "loading") Marquiz.init(o);else document.addEventListener("DOMContentLoaded", function () {
      Marquiz.init(o);
    });
  };
  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, "script", {
  host: "//quiz.marquiz.ru",
  region: "eu",
  id: "64a7d6fed93138002559cb21",
  autoOpen: false,
  autoOpenFreq: "once",
  openOnExit: false,
  disableOnMobile: false
});
(function (w, d, s, o) {
  var j = d.createElement(s);
  j.async = true;
  j.src = "//script.marquiz.ru/v2.js";
  j.onload = function () {
    if (document.readyState !== "loading") Marquiz.init(o);else document.addEventListener("DOMContentLoaded", function () {
      Marquiz.init(o);
    });
  };
  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, "script", {
  host: "//quiz.marquiz.ru",
  region: "eu",
  id: "64abd5b07396030025db38e3",
  autoOpen: false,
  autoOpenFreq: "once",
  openOnExit: false,
  disableOnMobile: false
});
(function (w, d, s, o) {
  var j = d.createElement(s);
  j.async = true;
  j.src = "//script.marquiz.ru/v2.js";
  j.onload = function () {
    if (document.readyState !== "loading") Marquiz.init(o);else document.addEventListener("DOMContentLoaded", function () {
      Marquiz.init(o);
    });
  };
  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, "script", {
  host: "//quiz.marquiz.ru",
  region: "eu",
  id: "64ad3f10648c4c0025df1565",
  autoOpen: false,
  autoOpenFreq: "once",
  openOnExit: false,
  disableOnMobile: false
});
(function (w, d, s, o) {
  var j = d.createElement(s);
  j.async = true;
  j.src = "//script.marquiz.ru/v2.js";
  j.onload = function () {
    if (document.readyState !== "loading") Marquiz.init(o);else document.addEventListener("DOMContentLoaded", function () {
      Marquiz.init(o);
    });
  };
  d.head.insertBefore(j, d.head.firstElementChild);
})(window, document, "script", {
  host: "//quiz.marquiz.ru",
  region: "eu",
  id: "64abeda4e6ebc80025cc383f",
  autoOpen: false,
  autoOpenFreq: "once",
  openOnExit: false,
  disableOnMobile: false
});
//# sourceMappingURL=main.js.map
