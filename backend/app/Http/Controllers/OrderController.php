<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderCreateRequest;
use App\Models\Order;
use Exception;

use function Laravel\Prompts\error;

class OrderController extends Controller
{
    
    public function store(OrderCreateRequest $request)
    {
        $request->validated();

        try {
            $order = Order::createOrder($request->all());

            return response()->json([
                'message' => 'Order succesfully created',
                'order' => $order
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something were wrong in create order',
                'error' => $e->getMessage(),
            ], 400);
        }
    }
}
