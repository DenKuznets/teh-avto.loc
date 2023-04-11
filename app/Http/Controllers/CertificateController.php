<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index() {
        $certificates = Certificate::all()->sortByDesc('id');
        return view('pages.certificates.index', compact('certificates'));
    }
}
