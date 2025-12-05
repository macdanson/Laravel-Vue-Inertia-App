<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/','Home')->name('home');
Route::resource('users', UserController::class);
Route::resource('posts', PostController::class);
