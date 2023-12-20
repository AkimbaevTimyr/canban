<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


class Order extends Model
{
    use HasFactory;

    protected $table = "order";

    protected $fillable = [
        "order_item_id",
        "user_id",
        "created_at",
        "updated_at"
    ];

    public static function createOrder($data)
    {
        $user_id = Auth::user()->id;
        $orderItem = OrderItem::createOrderItem($data, $user_id);
        return self::create([
            'order_item_id' => $orderItem->id,
            'user_id' => $user_id
        ]);
    }

    public static function getSalesCount($user_id)
    {
        return self::join('order_items', 'order_items.id', '=', 'order.order_item_id')
                    ->where('order.user_id', '=', $user_id)
                    ->count();
    }
}
