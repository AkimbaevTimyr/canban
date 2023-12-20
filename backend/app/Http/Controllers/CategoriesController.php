<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoriesCreateRequest;
use App\Models\Categories;
use Exception;
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

    public function store(CategoriesCreateRequest $request): JsonResponse
    {
        $request->validated();

        try {
            Categories::createCategory($request->category_name);
    
            return response()->json([
                'messages' => 'Category successfully created'
            ], 200);
        } catch (Exception $e) {
            report($e);
            return false;
        }
    }

    public function destroy(Request $request)
    {
        Validator::make($request->all(), [
            'id' => ['required']
        ]);

        $cat = Categories::find($request->id);

        if(!$cat){
            return response()->json(['message' => 'Category not found'], 404);
        }

        try{ 
            $deleted = $cat->delete();

            if ($deleted) {
                return response()->json(['message' => 'Category deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'Failed to delete category'], 500);
            }

        } catch(Exception $e) {
            return response()->json(['message' => 'An error occurred while deleting the category', 'error' => $e->getMessage()], 500);
        }
    }
}
