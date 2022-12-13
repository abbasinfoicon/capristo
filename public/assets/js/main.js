/************* Main Js File ************************
	Template Name: capristo
	Author: Themescare
	Version: 1.0
	Copyright 2019
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Main Slider JS
03 - Clockpicker JS
04 - Service Slider JS
05 - Testimonial Slider JS
06 - Responsive Menu JS
07 - Back To Top

-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(window).scroll(function () {
			var sticky = $('.capristo-main-header-area'),
				scroll = $(window).scrollTop();

			if (scroll >= 100) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
		});

		/* 
		=================================================================
		01 - Main Slider JS
		=================================================================	
		*/
		if ($('.capristo-slide').length) {
			$(".capristo-slide").owlCarousel({
				animateOut: 'fadeOutLeft',
				animateIn: 'fadeIn',
				items: 2,
				nav: true,
				dots: false,
				autoplayTimeout: 9000,
				autoplaySpeed: 5000,
				autoplay: true,
				loop: true,
				navText: ["<img src='assets/img/prev-1.png'>", "<img src='assets/img/next-1.png'>"],
				mouseDrag: true,
				touchDrag: true,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 1
					},
					750: {
						items: 1
					},
					1000: {
						items: 1
					},
					1200: {
						items: 1
					}
				}
			});

			$(".capristo-slide").on("translate.owl.carousel", function () {
				$(".capristo-main-slide h2").removeClass("animated fadeInUp").css("opacity", "0");
				$(".capristo-main-slide p").removeClass("animated fadeInDown").css("opacity", "0");
				$(".capristo-main-slide .line").removeClass("animated fadeInLeft").css("opacity", "0");
				$(".capristo-main-slide .capristo-btn").removeClass("animated fadeInDown").css("opacity", "0");
			});
			$(".capristo-slide").on("translated.owl.carousel", function () {
				$(".capristo-main-slide h2").addClass("animated fadeInUp").css("opacity", "1");
				$(".capristo-main-slide p").addClass("animated fadeInDown").css("opacity", "1");
				$(".capristo-main-slide .line").addClass("animated fadeInLeft").css("opacity", "1");
				$(".capristo-main-slide .capristo-btn").addClass("animated fadeInDown").css("opacity", "1");
			});
		}

		/* 
		=================================================================
		03 - Clockpicker JS
		=================================================================	
		*/

		if ($('.clockpicker').length) {
			$('.clockpicker').clockpicker();
		}


		/* 
		=================================================================
		04 - Service Slider JS
		=================================================================	
		*/

		if ($('.capristo-slide').length) {
			$(".service-slider").owlCarousel({
				autoplay: true,
				loop: true,
				margin: 25,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: false,
				dots: true,
				autoplayTimeout: 6000,
				autoplaySpeed: 1200,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});
		}

		/* 
		=================================================================
		05 - Testimonial Slider JS
		=================================================================	
		*/
		if ($('.testimonial-slider').length) {
			$(".testimonial-slider").owlCarousel({
				autoplay: true,
				loop: true,
				margin: 25,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: false,
				dots: true,
				autoplayTimeout: 6000,
				autoplaySpeed: 1200,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});
		}


		if ($('.interste-carousel').length) {
			$(".interste-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				margin: 30,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: true,
				dots: false,
				autoplayTimeout: 6000,
				autoplaySpeed: 1200,
				navText: ["<img src='assets/img/left-chevron.png' class='left-img' alt='left'/>", "<img src='assets/img/right-chevron.png' class='right-img' alt='right'/>"],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 4
					},
					1200: {
						items: 4
					}
				}
			});
		}

		if ($('.product-listing').length) {
			$(".product-listing").owlCarousel({
				autoplay: true,
				loop: true,
				margin: 30,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: true,
				dots: false,
				autoplayTimeout: 6000,
				autoplaySpeed: 1200,
				navText: ["<img src='assets/img/left-chevron.png' class='left-img' alt='left'/>", "<img src='assets/img/right-chevron.png' class='right-img' alt='right'/>"],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});
		}

		if ($('.team-carousel').length) {
			$(".team-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				margin: 30,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: true,
				dots: false,
				autoplayTimeout: 6000,
				autoplaySpeed: 1200,
				navText: ["<img src='assets/img/left-chevron-black.png' class='left-img' alt='left'/>", "<img src='assets/img/right-chevron-black.png' class='right-img' alt='right'/>"],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 3
					},
					1200: {
						items: 3
					}
				}
			});
		}
		if ($('.client-carousel').length) {
			$(".client-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				margin: 10,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: true,
				dots: false,
				autoplayTimeout: 7000,
				autoplaySpeed: 1500,
				navText: ["<img src='assets/img/left-chevron.png' class='left-img' alt='left'/>", "<img src='assets/img/right-chevron.png' class='right-img' alt='right'/>"],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 3
					},
					1200: {
						items: 4
					}
				}
			});
		}

		if ($('.partner-carousel').length) {
			$(".partner-carousel").owlCarousel({
				autoplay: true,
				loop: true,
				touchDrag: true,
				mouseDrag: true,
				items: 1,
				nav: false,
				dots: false
			});
		}

		/* 
		=================================================================
		07 - Back To Top
		=================================================================	
		*/
		if ($("body").length) {
			var btnUp = $('<div/>', {
				'class': 'btntoTop'
			});
			btnUp.appendTo('body');
			$(document).on('click', '.btntoTop', function () {
				$('html, body').animate({scrollTop: 0}, 700);
			});
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
				else $('.btntoTop').removeClass('active');
			});
		}

		/* 
		=================================================================
		08 - Video Poup
		=================================================================	
		*/

		if ($('.video_wrapper').length) {
			$(document).on('click', '.js-videoPoster', function (e) {
				//отменяем стандартное действие button
				e.preventDefault();
				var poster = $(this);
				// ищем родителя ближайшего по классу
				var wrapper = poster.closest('.js-videoWrapper');
				videoPlay(wrapper);
			});

			//вопроизводим видео, при этом скрывая постер
			function videoPlay(wrapper) {
				var iframe = wrapper.find('.js-videoIframe');
				// Берем ссылку видео из data
				var src = iframe.data('src');
				// скрываем постер
				wrapper.addClass('videoWrapperActive');
				// подставляем в src параметр из data
				iframe.attr('src', src);
			}
		}

		/* 
		=================================================================
		09 - Audio Player
		=================================================================	
		*/

		if ($('.audio-player').length) {

			const audioPlayer = document.querySelector(".audio-player");
			const audio = new Audio(
				"https://www.audi.com/content/dam/ci/Guides/Sound/Car_Sound/AudiRS5_2.9TFSI_backfire.mp3"
			);
			//credit for song: Adrian kreativaweb@gmail.com

			console.dir(audio);

			audio.addEventListener(
				"loadeddata",
				() => {
					audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
						audio.duration
					);
					audio.volume = .75;
				},
				false
			);

			//click on timeline to skip around
			const timeline = audioPlayer.querySelector(".timeline");
			timeline.addEventListener("click", e => {
				const timelineWidth = window.getComputedStyle(timeline).width;
				const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
				audio.currentTime = timeToSeek;
			}, false);

			//click volume slider to change volume
			const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
			volumeSlider.addEventListener('click', e => {
				const sliderWidth = window.getComputedStyle(volumeSlider).width;
				const newVolume = e.offsetX / parseInt(sliderWidth);
				audio.volume = newVolume;
				audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
			}, false)

			//check audio percentage and update time accordingly
			setInterval(() => {
				const progressBar = audioPlayer.querySelector(".progress");
				progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
				audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
					audio.currentTime
				);
			}, 500);

			//toggle between playing and pausing on button click
			const playBtn = audioPlayer.querySelector(".controls .toggle-play");
			playBtn.addEventListener(
				"click",
				() => {
					if (audio.paused) {
						playBtn.classList.remove("play");
						playBtn.classList.add("pause");
						audio.play();
					} else {
						playBtn.classList.remove("pause");
						playBtn.classList.add("play");
						audio.pause();
					}
				},
				false
			);

			audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
				const volumeEl = audioPlayer.querySelector(".volume-container .volume");
				audio.muted = !audio.muted;
				if (audio.muted) {
					volumeEl.classList.remove("icono-volumeMedium");
					volumeEl.classList.add("icono-volumeMute");
				} else {
					volumeEl.classList.add("icono-volumeMedium");
					volumeEl.classList.remove("icono-volumeMute");
				}
			});

			//turn 128 seconds into 2:08
			function getTimeCodeFromNum(num) {
				let seconds = parseInt(num);
				let minutes = parseInt(seconds / 60);
				seconds -= minutes * 60;
				const hours = parseInt(minutes / 60);
				minutes -= hours * 60;

				if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
				return `${String(hours).padStart(2, 0)}:${minutes}:${String(
					seconds % 60
				).padStart(2, 0)}`;
			}
		}

		/* 
		=================================================================
		10 - Video Popup
		=================================================================	
		*/

		if ($(".popup-youtube").length) {
			$('.popup-youtube').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
	});

}(jQuery));

