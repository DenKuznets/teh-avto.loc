<?php

namespace App\Http\Controllers;

use Alexusmai\YandexMetrika\YandexMetrika;
use App\Http\Requests\ContactFormReqest;
use App\Models\Contact;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $metrica = new YandexMetrika();
        return view('home', compact("metrica"));

    }

    public function contact(ContactFormReqest $request)
    {
        $contact =  Contact::create($request->validated());
        return back();
    }
}
