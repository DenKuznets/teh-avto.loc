@extends("master")
@section('title', 'Техавто')
@section("description", "Мы поможем вам подготовить документы для регистрации изменений в конструкцию вашего ТС, или переоборудование ТС в ГИБДД на законных основаниях.")
@section("content")
<main class="main">
    <div class="bg1-2">
        @include("../sections.hero")
        @include("../sections.advantages")        
    </div>
    
    @include("../sections.services")        
    @include("../sections.stages")
    @include("../sections.about")
    @include("../sections.certificate")
    @include("../sections.contacts")
   
</main>

@endsection