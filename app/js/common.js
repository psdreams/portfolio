
$(document).ready(function () {
	$(".typed").typed({
		strings: ["Опыт более 5 лет.", "Гарантии и сроки прописаны в договоре.", "На связи 24/7."],
		typeSpeed: 30,
		backSpeed: 10,
		loop: true,
	});




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
	// mask form
	$("#phone").mask("+7 (999) 999-99-99");
	// mask form end
	
});

// menu header

// открытие окна - js без анимации
// document.getElementById("navi-mob__burger").onclick = function () {
//   document.getElementById("navi-mob__items").classList.toggle("block_active");
// };

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


// swiper slide
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

//   валидация формы телефона

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
