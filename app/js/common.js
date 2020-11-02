
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





