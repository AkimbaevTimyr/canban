<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;

class PdfController extends Controller
{
    public function inventoryProductsDownload()
    {
        $user_id = Auth::user()->id;

        $data = Products::join('user_products', 'user_products.product_id', '=', 'products.id')
                    ->where('user_products.user_id', '=', $user_id)
                    ->select('products.*')
                    ->get();

        $pdf = Pdf::loadView('inventory.products', ['products' => $data]);

        return $pdf->download('products.pdf');
    }
}
