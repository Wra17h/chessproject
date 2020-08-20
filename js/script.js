"use strict";

// js code

let coloredFields = () => {
	let formFields = document.querySelectorAll(".js-order-call__input");
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
		window.addEventListener("load", () => {
			isColoredField(field);
		});
	});
};

coloredFields();

let scrollToForm = (selector) => {
	let scrollElements = document.querySelectorAll(selector);
	let form = document.querySelector(".leave-order");

	[...scrollElements].forEach((button) =>
		button.addEventListener("click", () => {
			if (form.offsetTop - 50 > window.pageYOffset) {
				form.scrollIntoView({ behavior: "smooth" });
			}
		}),
	);
};

scrollToForm("button");
scrollToForm(".skill__item");

let scrollToBlock = () => {
	let links = document.querySelectorAll(".menu-link");

	[...links].forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			let linkHref = link.attributes.href.nodeValue;
			let scrollBlock = document.querySelector(`${linkHref}`);
			scrollBlock.scrollIntoView({ behavior: "smooth" });
		});
	});
};

scrollToBlock();

$(".burger-menu").on("click", function() {
	$(".burger-menu__item").each(function(_, el) {
		!$(el).hasClass("open") ?  $(el).addClass("open") : $(el).removeClass("open");
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
		!$(el).hasClass("open") ?  $(el).addClass("open") : $(el).removeClass("open");
	})
});
