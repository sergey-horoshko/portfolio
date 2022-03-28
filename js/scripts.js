// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");
	const body = document.querySelector("body");
	burger.addEventListener("click", () => {
		if (!menu.classList.contains("active")) {
			menu.classList.add("active");
			burger.classList.add("active-burger");
			body.classList.add("locked");
		} else {
			menu.classList.remove("active");
			burger.classList.remove("active-burger");
			body.classList.remove("locked");
		}
	});
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active");
			burger.classList.remove("active-burger");
			body.classList.remove("locked");
		}
	});
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
	const nav = document.querySelector("nav");

	// тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
	const breakpoint = 800;
	if (window.scrollY >= breakpoint) {
		nav.classList.add("fixed__nav");
	} else {
		nav.classList.remove("fixed__nav");
	}
}
window.addEventListener("scroll", fixedNav);

// Прокрутка при клике
function scrollLinks() {
	const menuLinks = document.querySelectorAll("[data-goto]");
	const menuBody = document.body;
	const iconMenu = document.querySelector(".burger");
	const MenuBg = document.querySelector(".menu");

	if (menuLinks.length > 0) {
		menuLinks.forEach((menuLink) => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (
				menuLink.dataset.goto &&
				document.querySelector(menuLink.dataset.goto)
			) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue =
					gotoBlock.getBoundingClientRect().top +
					pageYOffset -
					document.querySelector("nav").offsetHeight;

				if (iconMenu.classList.contains("active-burger")) {
					iconMenu.classList.remove("active-burger");
					menuBody.classList.remove("locked");
					MenuBg.classList.remove("active");
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth",
				});
				e.preventDefault();
			}
		}
	}
}

scrollLinks();
