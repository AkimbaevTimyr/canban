<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
    public function all()
    {
        $categories = Categories::getUserCategories();

        return response()->json([
            'count' => count($categories),
            'data' => $categories
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        Validator::make($request->all(), [
            'category_name' => ['string', 'required'],
        ]);

        Categories::create([
            'category_name' => $request->category_name
        ]);

        return response()->json([
            'messages' => 'Category successfully created'
        ], 200);
    }

    public function destroy(Request $request)
    {
        Validator::make($request->all(), [
            'id' => ['required']
        ]);

        $cat = Categories::find($request->id);

        if($cat) {
            $deleted = $cat->delete();

            if ($deleted) {
                return response()->json(['message' => 'Category deleted successfully']);
            } else {
                return response()->json(['message' => 'Failed to delete category'], 500);
            }

        } else {
            return response()->json([
                'message' => 'Category not found',
            ], 404);
        }
    }
}
