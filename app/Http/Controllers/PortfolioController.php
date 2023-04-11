<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index() {
        $portfolios = Gallery::all()->sortByDesc('id');
        return view('pages.portfolio.index', compact('portfolios'));
    }
}
