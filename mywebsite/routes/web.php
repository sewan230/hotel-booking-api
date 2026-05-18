<?php

use Illuminate\Support\Facades\Route;



Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');
// // this is for the forget_password
// Route::get('/reset-password/{token}', function ($token) {
//     return view('app');
// })->name('password.reset');
