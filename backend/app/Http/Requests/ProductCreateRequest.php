<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['string', 'required', 'max:55'],
            "category_id" => ['required'],
            'buy_price' => ['required'],
            'quantity' => ['required', 'integer '],
            'threshold' => ['required', 'integer'],
            'expiry_date' => ['required'],
        ];
    }
}
