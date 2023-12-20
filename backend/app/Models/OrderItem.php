<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class OrderItem extends Model
{
    use HasFactory;

    protected $table = "order_items";

    protected $fillable = [
        "name",
        "category_id",
        "quantity",
        "buying_price",
        "delivery_date"
    ];

    public static function createOrderItem($data, $user_id)
    {   
        return DB::transaction(function () use ($data, $user_id) {
            $orderItem = self::create([
                "name" => $data['name'],
                "category_id" => $data['category_id'],
                "quantity" => $data['quantity'],
                "buying_price" => $data['buying_price'],
                "delivery_date" => $data['delivery_date'],
            ]);

            if($orderItem) {
                Products::decreaseQuantity($data['quantity'], $user_id, $data['name']);
            }

            return $orderItem;
        })
    }

}

