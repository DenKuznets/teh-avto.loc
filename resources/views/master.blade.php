<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include("layouts.head")

<body>
    <div class="bg">
        @include("layouts.header")
        <button class="burger">
            <img src="{{ asset('assets/img/burger.svg') }}" alt="">
        </button>
        <button class="mobile-menu__close-btn">
            <img src="{{ asset('assets/img/close-btn.svg') }}" alt="">
        </button>
        @yield("content")
        @include("layouts.footer")
    </div>
    <script src="{{ mix('/assets/js/main.js') }}"></script>
    @yield("scripts")
</body>

</html>