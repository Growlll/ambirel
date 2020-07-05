import $ from 'jquery';
import './easings.min';
import './scrolloverflow.min';
import './fullpage.min';
import Swiper from 'swiper';
import '../style.scss';


const sushi = document.querySelector('#sushi')
const manufactory = document.querySelector('#manufactory')
const casesTab = document.querySelectorAll('.cases__tab')
const modalClose = document.querySelector('.modal-thanks__close')
const modalThanks = document.querySelector('.modal-thanks')

modalClose.addEventListener('click', () => modalThanks.classList.remove('modal-thanks--active'))

casesTab[0].addEventListener('click', () => {
	casesTab[1].classList.remove('cases__text--theme-blue')
	casesTab[0].classList.add('cases__text--theme-blue')
	manufactory.classList.remove('cases__links--active')
	sushi.classList.add('cases__links--active')
})

casesTab[1].addEventListener('click', () => {
	casesTab[0].classList.remove('cases__text--theme-blue')
	casesTab[1].classList.add('cases__text--theme-blue')
	sushi.classList.remove('cases__links--active')
	manufactory.classList.add('cases__links--active')
})


var mySwiper = new Swiper ('.swiper-wrap', {
	loop: true,
	noSwiping: true,
	noSwipingClass: 'swiper-wrap',
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
var mySwiperMobile = new Swiper ('.swiper-mobile', {
	loop: true,
	noSwiping: true,
	noSwipingClass: 'swiper-wrap',
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-mobile',
		prevEl: '.swiper-button-prev-mobile',
	},
})

var mySwiperInner = new Swiper ('.swiper-inner', {
	loop: true,
	noSwiping: true,
	noSwipingClass: 'swiper-inner',
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-inner',
		prevEl: '.swiper-button-prev-inner',
	},
})
var mySwiperJob = new Swiper ('.swiper-job', {
	loop: true,
	noSwiping: true,
	noSwipingClass: 'swiper-job',
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-job',
		prevEl: '.swiper-button-prev-job',
	},
})

let intViewportWidth = window.innerWidth;

if (intViewportWidth < 992) {
	var mySwiperWorking = new Swiper('.swiper-working', {
		init: true,
		slidesPerView: 1,
		spaceBetween: 30,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-working',
			prevEl: '.swiper-button-prev-working',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			}
		}
	})
}

// скрипт для отправки почты
jQuery(document).ready(function($) {

	$('.form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(".modal-thanks").addClass('modal-thanks--active');
			$(".form").trigger("reset");
		});
		return false;
	});
});


// let $page = $('html, body');
// $('a[href*="#"]').click(function() {
// 	$page.animate({
// 		scrollTop: $($.attr(this, 'href')).offset().top
// 	}, 400);
// 	return false;
// });








