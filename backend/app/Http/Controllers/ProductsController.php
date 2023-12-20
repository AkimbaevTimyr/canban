<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCreateRequest;
use App\Models\Products;
use App\Models\UserProducts;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


// {
//     "name": "Iphone 10",
//     "category_id": 3,
//     "buy_price": 199999.000,
//     "quantity": 5,
//     "threshold": 2
// }

class ProductsController extends Controller
{
    public function all(Request $request)
    {
        try {
            $products = Products::getUserProducts($request->category_id);
            return $products;
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something were wrong in Products Controller',
                'error' => $e->getMessage(),
            ], 400);
        }
    } 

    public function lowStocks(Request $request)
    {
        try {
            $products = Products::getLowStocks();
            return $products;

        } catch(Exception $e) {
            return response()->json([
                'message' => 'Something were wrong in Products Controller',
                'error' => $e->getMessage(),
            ], 400);
        }
    }

    public function store(ProductCreateRequest $request)
    {
        $user_id = Auth::user()->id;

        $request->validated();

        try{ 
            $product = Products::createProduct($user_id, $request->all());
    
            UserProducts::create([
                'user_id' => $user_id,
                'product_id' => $product->id           
            ]);

            return response()->json([
                'message' => 'Product successfully created',
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something were wrong in Products Controller',
                'error' => $e->getMessage(),
            ], 400);
        }
    }

    public function count()
    {
        $count = UserProducts::getProductsCount();
        return $count;
    }

    public function createStore(Request $request) 
    {
        Validator::make($request->all(), [
            'address' => ['required', 'string']
        ]);

        $address = '';

        return $address;
    }
}
