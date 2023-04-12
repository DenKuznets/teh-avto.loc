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
    // basic class
    const animateClass = "animate_animated";
    // delays
    const delay03 = "animate__delay-03s";
    const delay06 = "animate__delay-06s";
    const delay09 = "animate__delay-09s";
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

    //#contacts
    const contactsText = document.querySelector('.contacts__text');
    const contactsMap = document.querySelector('.contacts__map');
    if (contactsText) {
        contactsText.classList.add(animateClass);
        animate([contactsText], backInLeft)
    }
    if (contactsMap) {
        contactsMap.classList.add(animateClass);
        animate([contactsMap], backInRight);
    }

    // #about
    const aboutText = document.querySelector('.about__text');
    const aboutImage = document.querySelector('.about__image');
    if (aboutText) {
        aboutText.classList.add(animateClass);
        animate([aboutText], backInLeft);
    }
    if (aboutImage) {
        aboutImage.classList.add(animateClass);
        animate([aboutImage], backInRight);
    }


    // #stages
    const stagesCards = document.querySelector('.stages__cards');
    if (stagesCards) {
        for (let i = 0; i < stagesCards.children.length; i++) {
            const elem = stagesCards.children[i];
            elem.classList.add(animateClass);
            if (i === 0 || i === 1) {
                animate([elem], bounceInDown);
            }
            if (i === 2 || i === 3) {
                elem.classList.add(delay03);
                animate([elem], bounceInUp);
            }
        }
    }

    // #services
    const servCards = document.querySelector(".services__cards");
    if (servCards) {
        for (let i = 0; i < servCards.children.length; i++) {
            const elem = servCards.children[i];
            elem.classList.add(animateClass);
            if (i % 2 === 0) {
                animate([elem], backInLeft)
            }
            if (i % 2 !== 0) {
                elem.classList.add(delay03);
                animate([elem], backInRight);
            }
        }
    }

    // #hero
    const heroImg = document.querySelector(".hero__image");
    if (heroImg) {
        heroImg.classList.add(animateClass);
        animate([heroImg], backInRight);
    }

    const heroText = document.querySelector(".hero__text");
    if (heroText) {
        for (let i = 0; i < heroText.children.length; i++) {
            const elem = heroText.children[i];
            elem.classList.add(animateClass);
            if (i === 1) {
                elem.classList.add(delay03);
            }
            if (i === 2) {
                elem.classList.add(delay06);
            }
        }
        animate(Array.from(heroText.children), zoomIn);
    }

    window.addEventListener("scroll", () => {
        if (heroImg) animate([heroImg], backInRight);
        if (heroText) animate(Array.from(heroText.children), zoomIn);
        if (servCards) {
            for (let i = 0; i < servCards.children.length; i++) {
                const elem = servCards.children[i];
                if (i % 2 === 0) {
                    animate([elem], backInLeft);
                }
                if (i % 2 !== 0) {
                    animate([elem], backInRight);
                }
            }
        }
        if (stagesCards) {
            for (let i = 0; i < stagesCards.children.length; i++) {
                const elem = stagesCards.children[i];
                if (i === 0 || i === 1) {
                    animate([elem], bounceInDown);
                }
                if (i === 2 || i === 3) {
                    animate([elem], bounceInUp);
                }
            }
        }
        if (aboutText) {
            animate([aboutText], backInLeft);
        }
        if (aboutImage) {
            animate([aboutImage], backInRight);
        }
        if (contactsText) {
            animate([contactsText], backInLeft);
        }
        if (contactsMap) {
            animate([contactsMap], backInRight);
        }
    });
});
