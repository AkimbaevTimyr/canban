<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
