<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Products as ModelsProducts;
use App\Models\UserProducts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class Products extends Controller
{
    public function all()
    {
        $user_id = Auth::user()->id;
        $products = ModelsProducts::join('user_products', 'user_products.product_id', '=', 'products.id')
                        ->where('user_products.user_id', '=', $user_id)
                        ->select('products.*')
                        ->paginate();
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

        $product = ModelsProducts::create([
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
