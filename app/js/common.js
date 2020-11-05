
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
});

// menu header
// открытие окна
document.getElementById("navi-mob__burger").onclick = function () {
  document.getElementById("navi-mob__items").classList.toggle("block_active");
};
// закрытие окна
// document.querySelectorAll("#navi-mob_portfolio, #navi-mob_price, #navi-mob_reviews, #navi-mob_contacts").onclick = function () {
document.getElementById("navi-mob_portfolio").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("block_active");
};
document.getElementById("navi-mob_price").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("block_active");
};
document.getElementById("navi-mob_reviews").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("block_active");
};
document.getElementById("navi-mob_contacts").onclick = function () {
	document.getElementById("navi-mob__items").classList.remove("block_active");
};



