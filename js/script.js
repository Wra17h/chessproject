"use strict";

// js code
$(document).ready(function($) {
	let coloredFields = () => {
		let formFields = $(".js-order-call__input");
		let inputFocusColor = "#f6e3d1";

		let isColoredField = (field) => {
			field.value !== ""
				? (field.style.background = inputFocusColor)
				: (field.style.background = "transparent");
		};

		[...formFields].forEach((field) => {
			field.addEventListener("input", () => {
				isColoredField(field);
			});
			isColoredField(field);
		});
	};

	coloredFields();

	let scrollToForm = (selector) => {
		let scrollElements = $(selector);
		let form = $(".leave-order");

		scrollElements.each((_, el) =>
			el.addEventListener("click", () => {
				if (form.offset().top - 50 > window.pageYOffset) {
					form[0].scrollIntoView({ behavior: "smooth" });
				}
			}),
		);
	};

	scrollToForm("button");
	scrollToForm(".skill__item");

	let scrollToBlock = () => {
		let links = $(".menu-link");

		links.each((_, link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				let linkHref = e.target.hash;
				let scrollBlock = $(`${linkHref}`)[0];
				scrollBlock.scrollIntoView({ behavior: "smooth" });
			});
		});
	};

	scrollToBlock();

	let burgerMenuToggle = () => {
		$(".burger-menu").on("click", function() {
			$(".burger-menu__item").each(function(_, el) {
				!$(el).hasClass("open")
					? $(el).addClass("open")
					: $(el).removeClass("open");
			});
			if ($(".wrapper").hasClass("slide-open")) {
				$(".wrapper").removeClass("slide-open");
				$("body").removeAttr("style");
			} else {
				$(".wrapper").addClass("slide-open");
				$("body").css({ overflow: "hidden" });
			}
		});

		$(".slideout-menu").on("click", function() {
			$("body").removeAttr("style");
			$(".wrapper").removeClass("slide-open");
			$(".burger-menu__item").each(function(_, el) {
				!$(el).hasClass("open")
					? $(el).addClass("open")
					: $(el).removeClass("open");
			});
		});
	};
	burgerMenuToggle();

	let buttonUp = () => {
		let buttonUp = $(".buttonUp");
		let buttonHideClass = "button-up-hide";

		$(window).on("scroll", function() {
			if($(this).scrollTop() > 500) {
				buttonUp.removeClass(buttonHideClass);
			} else {
				buttonUp.addClass(buttonHideClass);
			}
		})

		buttonUp.on("click", function(){$("html, body").animate({scrollTop:0},700);return false;});
	};

		buttonUp();
});
