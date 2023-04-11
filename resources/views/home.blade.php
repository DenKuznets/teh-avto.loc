@dd($metrica->getSourcesSummary()->adapt())
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                        <form method="post" action="{{ route("contact") }}">
                            @csrf
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Имя</label>
                                <input name="name" type="text" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword2" class="form-label">Телефон</label>
                                <input name="phone" type="tel" class="form-control" id="exampleInputPassword2">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword3" class="form-label">Комментарий</label>
                                <input name="text" type="tel" class="form-control" id="exampleInputPassword3">
                            </div>
                            <button type="submit" class="btn btn-primary">Отправить</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
