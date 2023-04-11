@extends("master")
@section('title', 'Техавто')
@section("description", "Мы поможем вам подготовить документы для регистрации изменений в конструкцию вашего ТС,
или переоборудование ТС в ГИБДД на законных основаниях.")
@section("content")
<main class="main">
    <div class="mask mask1">
        @include("../sections.hero")
        @include("../sections.advantages")
    </div>
    <div class="mask mask2">
        @include("../sections.services")
        @include("../sections.stages")
        @include("../sections.about")
    </div>
    <div class="mask mask3">
        @include("../sections.certificate")
        @include("../sections.contacts")
    </div>
</main>

@endsection