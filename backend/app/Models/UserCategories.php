<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCategories extends Model
{
    use HasFactory;

    protected $table = "user_categories";

    protected $fillable = [
        "user_id",
        "category_id"
    ];

    public static function createUserCategory($cat_id, $user_id)
    {
        return self::create([
            'category_id' => $cat_id,
            'user_id' => $user_id
        ]);
    }
    
}

