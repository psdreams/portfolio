
$(document).ready(function () {
	$(".typed").typed({
		strings: ["Опыт более 5 лет.", "Гарантии и сроки прописаны в договоре.", "На связи 24/7."],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
	});


	if ( $(window).width() > 769) {

		$('.mouse-parallax').on('mousemove', (e) => {
			const x = e.pageX / $(window).width();
			const y = e.pageY / $(window).width();

			$('.mouse-parallax__background').css(
				'transform',
				'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)'
			)

			$('.mouse-parallax__content').css(
				'transform',
				'translate(' + x * 40 + 'px, ' + y * 40 + 'px)'
			)
		});
	};
	// mask form
	$("#phone").mask("+7 (999) 999-99-99");
	// mask form end
	
});

// menu header

// открытие окна - js без анимации
// document.getElementById("navi-mob__burger").onclick = function () {
//   document.getElementById("navi-mob__items").classList.toggle("block_active");
// };

// открытие модалки
// document.getElementById("modal-on").onclick = function () {
// 	document.getElementById("modal").classList.toggle("block_active");
// };

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready

// закрытие модалки

// анимация открытия окна меню - анимацией
document.getElementById("navi-mob__burger").onclick = function () {
	document.getElementById("navi-mob__items").classList.toggle("navi-mob__items_active");
};
// закрытие окна
// document.querySelectorAll("#navi-mob_portfolio, #navi-mob_price, #navi-mob_reviews, #navi-mob_contacts").onclick = function () {
document.getElementById("navi-mob_portfolio").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("navi-mob__items_active");
};
document.getElementById("navi-mob_price").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("navi-mob__items_active");
};
document.getElementById("navi-mob_reviews").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("navi-mob__items_active");
};
document.getElementById("navi-mob_contacts").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("navi-mob__items_active");
};
// menu header end


// swiper slide start
var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	slidesPerView: 3,
	loop: true,
	// centeredSlides: !0,
	centeredSlides: true,
	spaceBetween: 30,
	slidesPerView: "1.7",
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
	breakpoints: {
		    1200: {
		      slidesPerView: 1.7,
		      spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 20,
			  },
			500: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		  },
  })
// swiper slide end

//   валидация формы телефона start
let inputs = document.querySelectorAll('input[data-rule]');
for (let input of inputs) {
	input.addEventListener('blur', function() {
		let rule = this.dataset.rule;
		let value = this.value;
		let check;

		switch (rule) {
			case 'number':
				check = /^\d+$/.test(value);
			break;
			case 'email':

			break;
			case 'domain':

			break;
		}

		this.classList.remove('invalid');
		this.classList.remove('valid');
		if (check) {
			this.classList.add('valid');
		} else {
			this.classList.add('invalid');
		}
	});
};
//   валидация формы телефона end

// Открытие меню servises start
document.getElementById("servises__check-none").onclick = function () {
	document.getElementById("services__list-more").classList.toggle("block_list-more_active");
	document.getElementById("servises__check-none-list").classList.toggle("block_hidden");
};

document.getElementById("servises__list-more_item2").onclick = function () {
	document.getElementById("services__list-more2").classList.toggle("block_list-more_active");
	document.getElementById("servises__check-none-list2").classList.toggle("block_hidden");
};

document.getElementById("servises__list-more_item3").onclick = function () {
	document.getElementById("services__list-more3").classList.toggle("block_list-more_active");
	document.getElementById("servises__check-none-list3").classList.toggle("block_hidden");
};
// Открытие меню servises end

// анимация крестика start
(function(){
	
	'use strict';

	let a = document.querySelector('.a-toggle');
	let b = document.querySelector('.b-toggle');
	let c = document.querySelector('.c-toggle');

	a.addEventListener('click', function(e){
		e.preventDefault();
		this.classList.toggle('a-toggle--click');
	});
	b.addEventListener('click', function(e){
		e.preventDefault();
		this.classList.toggle('b-toggle--click');
	});
	c.addEventListener('click', function(e){
		e.preventDefault();
		this.classList.toggle('c-toggle--click');
	});
	
})();
// анимация крестика end


// Маска модельного окна телефон
// function mask(inputName, mask, evt) {
// 	try {
// 	  var text = document.getElementById(inputName);
// 	  var value = text.value;

// 	  // If user pressed DEL or BACK SPACE, clean the value
// 	  try {
// 		var e = (evt.which) ? evt.which : event.keyCode;
// 		if ( e == 46 || e == 8 ) {
// 		  text.value = "";
// 		  return;
// 		}
// 	  } catch (e1) {}

// 	  var literalPattern=/[0\*]/;
// 	  var numberPattern=/[0-9]/;
// 	  var newValue = "";

// 	  for (var vId = 0, mId = 0 ; mId < mask.length ; ) {
// 		if (mId >= value.length)
// 		  break;

// 		// Number expected but got a different value, store only the valid portion
// 		if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
// 		  break;
// 		}

// 		// Found a literal
// 		while (mask[mId].match(literalPattern) == null) {
// 		  if (value[vId] == mask[mId])
// 			break;

// 		newValue += mask[mId++];
// 	  }

// 	  newValue += value[vId++];
// 	  mId++;
// 	}

// 	text.value = newValue;
//   } catch(e) {}
//   }



window.addEventListener("DOMContentLoaded", function() {
	function setCursorPosition(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
			var range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select()
		}
	}
	
	function mask(event) {
		var matrix = "+7 (___) ___ ____",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;
		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
		});
		if (event.type == "blur") {
			if (this.value.length == 2) this.value = ""
		} else setCursorPosition(this.value.length, this)
	};
		var input = document.querySelector("#tel");
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
	});

  // Маска модельного окна телефон конец

//   ================================================================================================================================================

