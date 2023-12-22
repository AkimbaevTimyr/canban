<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\UserProducts;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SalesController extends Controller
{
    
    public function salesCount(Request $request)
    {
        $user_id = Auth::user()->id;

        try {
            $count = Order::getSalesCount($user_id);

            return response()->json([
                'count' => $count
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something where wrong',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function salesTop(Request $request)
    {
        $user_id = Auth::user()->id;

        try{
            $products = Order::getSalesTop($user_id);
            $count = Order::getSalesTopPrice($user_id);

            return response()->json([
                'data' => $products,
                'products_count' => count($products),
                'total_price' => $count
            ]);

        } catch(Exception $e) {
            return response()->json([
                'message' => 'Something where wrong',
                'error' => $e->getMessage(),
            ]);
        }
    }

    

}
