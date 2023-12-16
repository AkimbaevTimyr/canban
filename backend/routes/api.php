<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/orders', function() {
        return 'orders';
    });

    Route::post('/category-create', [CategoriesController::class, 'store']);
    Route::delete('/category-delete', [CategoriesController::class, 'destroy']);
    Route::get('/categories-all', [CategoriesController::class, 'all']);

    Route::get('/products-all', [Products::class, 'all']);
    Route::post('/product-create', [Products::class, 'store']);
});


Route::post('/login', [LoginController::class, 'authenticate'])->name('login');
Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/signup', [RegisteredUserController::class, 'store']);

