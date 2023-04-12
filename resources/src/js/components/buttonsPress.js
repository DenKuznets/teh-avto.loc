

// нажатие кнопки Оставить заявку на главной
const heroBtn = document.getElementById("hero-btn");
heroBtn.addEventListener("click", openPopup);

// нажатие кнопки оставить заявку в Услугах
const servBtns = document.querySelectorAll(".services__card__btn-cta");
for (let btn of servBtns) {
    btn.addEventListener("click", openPopup);
}

// закрытие попапа по кнопке
const popupBtn = document.getElementById("popup__close-btn");
popupBtn.addEventListener("click", closePopup);

// закрытие попапа по клику мимо
document.getElementById("popup").addEventListener("click", function (e) {
    if (e.target.classList.contains("popup")) {
        closePopup();
    }
});

// открытие попапа
function openPopup() {
    document.getElementById("popup").classList.add("popup-show");
    document.body.classList.toggle("modal-open");
}

// закрыть попап
function closePopup() {
    document.getElementById("popup").classList.remove("popup-show");
    document.body.classList.toggle("modal-open");
}

// бургер нажатие
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".mobile-menu__close-btn");
const phone = document.querySelector(".header__phone");
const logo = document.querySelector(".header__logo");
burger.addEventListener("click", function () {
    const nav = document.querySelector(".nav__list-header");
    nav.classList.add("mobile-nav-active");
    burger.classList.remove("burger-show");
    burger.classList.add("burger-hide");
    closeBtn.classList.toggle("mobile-menu__close-btn-active");
    phone.classList.toggle("header__phone-mobile");
    logo.classList.toggle("header__logo-fixed");
    document.body.classList.toggle("modal-open");
});

// кнопка закрыть мобильное меню нажатие
closeBtn.addEventListener("click", closeMobileMenu);

// ссылки в мобильном меню нажатие
let mobileMenuAnchors = document.querySelectorAll(".nav__item-header");
for (let anchor of mobileMenuAnchors) {
    anchor.addEventListener("click", closeMobileMenu);
}

// закрыть мобильное меню
function closeMobileMenu() {
    const nav = document.querySelector(".nav__list-header");
    nav.classList.remove("mobile-nav-active");
    if (closeBtn.classList.contains("mobile-menu__close-btn-active")) {
        closeBtn.classList.toggle("mobile-menu__close-btn-active");
        burger.classList.add("burger-show");
        burger.classList.remove("burger-hide");
        phone.classList.toggle("header__phone-mobile");
        logo.classList.toggle("header__logo-fixed");
        document.body.classList.toggle("modal-open");
    }
}
