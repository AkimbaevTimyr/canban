<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\UserProducts;
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
        $products = Products::getUserProducts($request->category_id);
        return $products;
    }

    public function lowStocks(Request $request)
    {
        $products = Products::getLowStocks();
        return $products;
    }

    public function store(Request $request)
    {
        $user_id = Auth::user()->id;

        Validator::make($request->all(), [
            "name" => ['string', 'required', 'max:55'],
            "category_id" => ['required'],
            'buy_price' => ['required', 'decimal'],
            'quantity' => ['required', 'integer '],
            'threshold' => ['required', 'integer']
        ]);

        $product = Products::create([
            'name' => $request->name,
            'category_id' => $request->category_id,
            'buy_price' => $request->buy_price,
            'quantity' => $request->quantity,
            'threshold' => $request->threshold,
            'user_id' => $user_id,
        ]);

        UserProducts::create([
            'user_id' => $user_id,
            'product_id' => $product->id           
        ]);

        if($product) {
            return response()->json([
                'message' => 'Category successfully created',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Something were wrong',
            ], 500);
        }
    }
}
