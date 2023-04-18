import "animate.css";

document.addEventListener("DOMContentLoaded", () => {
    // Логическая функция вывода анимация
    // elem - массив блоков или отдельный блок для анимации
    // className - класс отвечающий за анимацию

    function animate(elem, className = "animate") {
        // console.log("elem", elem);
        let windowCenter = window.innerHeight / 1 + window.scrollY; // ширина экрана * 1.1 + высота на сколько просролили экран
        elem.forEach((el) => {
            // console.log("el", el);
            let observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    // console.log(entry);
                    if (entry.isIntersecting) {
                        return entry.target.classList.add(className);
                    }
                });
            });

            let scrollOffset = el.offsetParent.offsetTop + el.offsetHeight / 2;
            if (windowCenter >= scrollOffset) {
                observer.observe(el);
            }
        });
    }

    //tech-auto animations
    // animation types
    const zoomIn = "animate__zoomIn";
    const backInRight = "animate__backInRight";
    const backInLeft = "animate__backInLeft";
    const bounceInDown = "animate__bounceInDown";
    const bounceInUp = "animate__bounceInUp";
    const fadeIn = "animate__fadeIn";
    const flip = "animate__flip";
    const lightSpeedInRight = "animate__lightSpeedInRight";
    const zoomInRight = "animate__zoomInRight";

    // #contacts
    const contactsText = document.querySelectorAll(".contacts__text");
    const contactsMap = document.querySelectorAll(".contacts__map");
    if (contactsText) {
        animate(contactsText, backInLeft);
    }
    if (contactsMap) {
        animate(contactsMap, backInRight);
    }

    // #about
    const aboutText = document.querySelectorAll(".about__text");
    const aboutImage = document.querySelectorAll(".about__image");
    if (aboutText) {
        animate(aboutText, backInLeft);
    }
    if (aboutImage) {
        animate(aboutImage, backInRight);
    }

    // #stages
    const stagesCards = document.querySelectorAll(".stages__card");
    if (stagesCards) animate([stagesCards[0]], backInRight);
    if (stagesCards) animate([stagesCards[1]], backInRight);
    if (stagesCards) animate([stagesCards[2]], backInLeft);
    if (stagesCards) animate([stagesCards[3]], backInLeft);

    // #services
    const servCards = document.querySelectorAll(".services__card");
    if (servCards) animate([servCards[0]], backInRight);
    if (servCards) animate([servCards[2]], backInRight);
    if (servCards) animate([servCards[1]], backInLeft);
    if (servCards) animate([servCards[3]], backInLeft);

    // #hero
    const heroImg = document.querySelectorAll(".hero__image");
    if (heroImg) {
        animate(heroImg, backInRight);
    }

    const heroText = document.querySelectorAll(".hero__text");
    if (heroText) animate(heroText, backInLeft);

    window.addEventListener("scroll", () => {
        if (heroImg) animate(heroImg, backInRight);
        if (heroText) animate(heroText, backInLeft);
        if (servCards) animate([servCards[0]], backInRight);
        if (servCards) animate([servCards[2]], backInRight);
        if (servCards) animate([servCards[1]], backInLeft);
        if (servCards) animate([servCards[3]], backInLeft);
        if (stagesCards) animate([stagesCards[0]], backInRight);
        if (stagesCards) animate([stagesCards[1]], backInRight);
        if (stagesCards) animate([stagesCards[2]], backInLeft);
        if (stagesCards) animate([stagesCards[3]], backInLeft);
        if (aboutText) {
            animate(aboutText, backInLeft);
        }
        if (aboutImage) {
            animate(aboutImage, backInRight);
        }
        if (contactsText) {
            animate(contactsText, backInLeft);
        }
        if (contactsMap) {
            animate(contactsMap, backInRight);
        }
    });
});
