<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\SalesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
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
    Route::post('/category-create', [CategoriesController::class, 'store']);
    Route::delete('/category-delete', [CategoriesController::class, 'destroy']);
    Route::get('/categories-all', [CategoriesController::class, 'all']);

    Route::get('/products-all', [ProductsController::class, 'all']);
    Route::post('/product-create', [ProductsController::class, 'store']);
    Route::get('/products-low-stocks', [ProductsController::class, 'lowStocks']);
    Route::get('/products-count', [ProductsController::class, 'count']);

    Route::post('/order-create', [OrderController::class, 'store']);
    
    Route::get('/sales-count', [SalesController::class, 'salesCount']);

});

Route::get('/inventory-products-download', [PdfController::class, 'inventoryProductsDownload']);

Route::post('/login', [LoginController::class, 'authenticate'])->name('login');
Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/signup', [RegisteredUserController::class, 'store']);


