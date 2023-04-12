<footer>
    <div class="footer-top">
        <div class="footer-top__logo-container">
            <a href="#">
                <img src="{{ asset('assets/img/logo.svg') }}" alt="" class="footer-top__logo-img">
            </a>
        </div>
        <div class="footer-top__nav">
            <ul class="nav nav__list-footer">
                <li class="nav__item-footer">
                    <a href="#about">
                        О компании
                    </a>
                </li>
                <li class="nav__item-footer"><a href="#services">Услуги</a></li>
                <li class="nav__item-footer"><a href="#stages">Этапы работы</a></li>
                <li class="nav__item-footer"><a href="#certificate">Сертификаты</a></li>
                <li class="nav__item-footer"><a href="#contacts">Контакты</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p id="rights">© <?php echo date("Y") ?> , Все права защищены</p>
        <a id="policy" href="">
            <p>Политика конфиденциальности</p>
        </a>
        <a id="alexmedia" href="https://alex-media.ru/">
            <p>Сайт разработан компанией ALEX–MEDIA</p>
        </a>
    </div>
</footer>

<div id="popup" class="popup">
    <div class="popup__content">
        <img id="popup__close-btn" src="{{ asset('assets/img/popup-close-btn.svg') }}" alt="" class="popup__close-btn">
        <h2>
            Оставьте заявку, мы обязательно свяжемся с вами!
        </h2>
        <p>
            Оставьте свой номер телефона, и мы поможем воплотить вашу мечту в реальность
        </p>
        <form action="">
            <input placeholder="Имя" type="text" name="name" class="form-name" />
            <input placeholder="Телефон" type="text" name="phone" class="form-phone" />
            <button class="btn btn-cta">Оставить заявку</button>
        </form>
    </div>
</div>