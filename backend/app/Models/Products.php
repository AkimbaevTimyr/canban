<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class Products extends Model
{
    use HasFactory;

    protected $table = "products";

    protected $fillable = [
        "name",
        "category_id",
        "buy_price",
        "quantity",
        "threshold",
        "created_at",
        "updated_at"
    ];

    public static function createProduct($user_id, $data)
    {
        return self::create([
            'name' => $data['name'],
            'category_id' => $data['category_id'],
            'buy_price' => $data['buy_price'],
            'quantity' => $data['quantity'],
            'threshold' => $data['threshold'],
            'user_id' => $user_id,
        ]);
    }

    public static function getUserProducts($id)
    {
        $user_id = Auth::user()->id;

        return self::join('user_products', 'user_products.product_id', '=', 'products.id')
                    ->where('user_products.user_id', '=', $user_id)
                    // ->where('products.category_id', '=', $id)
                    ->select('products.*')
                    ->paginate();
    }

    public static function getLowStocks()
    {
        $user_id = Auth::user()->id;
        return self::join('user_products', 'user_products.product_id', '=', 'products.id')
                        ->where('user_products.user_id', '=', $user_id)
                        ->select(
                                    DB::raw('count(case when products.quantity <= 10 then 1 end) as low_stock'),
                                    DB::raw('count(case when products.quantity = 0 then 1 end) as not_in_stock',)
                                )   
                        ->get()[0];
    }

    public static function decreaseQuantity($quantity, $user_id, $name) 
    {
        $product = Products::join('user_products', 'user_products.product_id', '=', 'products.id')
                                ->where('user_products.user_id', '=', $user_id)
                                ->where('products.name', 'like', $name)
                                ->select('products.*')
                                ->first();
        $product->quantity -= $quantity;
        $product->save();
    }

}
