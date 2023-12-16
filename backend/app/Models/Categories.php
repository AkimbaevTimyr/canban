<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


class Categories extends Model
{
    use HasFactory;

    protected $table = "categories";

    protected $fillable = [
        "category_name",
        "created_at",
        "updated_at"
    ];

    public static function getUserCategories(): array
    {
        $user_id = Auth::user()->id;

        return self::join('user_categories', 'user_categories.category_id', '=', 'categories.id')
                    ->where('user_categories.user_id', '=', $user_id)
                    ->select('categories.*')
                    ->get();
    }
}
