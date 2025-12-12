<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GuestbookController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/','Home')->name('home');

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'show')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::put('/profile/password', 'updatePassword')->name('profile.password.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });

    Route::resource('users', UserController::class);
    Route::resource('posts', PostController::class);
    Route::delete('comments/{comment}', [PostController::class, 'deleteComment'])->name('comments.destroy');
    Route::resource('products', ProductController::class);
    Route::resource('signatures', GuestbookController::class);

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::middleware(['guest'])->group(function () {
    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::inertia('/register', 'Auth/Register')->name('register');
    Route::controller(AuthController::class)->group(function () {
        Route::post('/login', 'authenticate')->name('login');
        Route::post('/register', 'register')->name('register');
    });

});
