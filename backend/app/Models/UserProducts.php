<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserProducts extends Model
{
    use HasFactory;

    protected $table = "user_products";

    protected $fillable = [
        "user_id",
        "product_id"
    ];


    public static function getProductsCount()
    {
        $user_id = Auth::user()->id;

        return self::where('user_id', '=', $user_id)
                    ->select(
                                DB::raw('count(product_id) as producs_count')
                            )
                    ->get();
    }
}
