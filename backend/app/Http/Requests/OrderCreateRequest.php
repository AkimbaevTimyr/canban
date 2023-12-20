<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255', 'required'],
            'category_id' => ['integer', 'required'],
            'quantity' => ['required', 'integer'],
            'buying_price' => ['numeric','required', 'regex:/^\d+(\.\d{1,2})?$/'],
            'delivery_date' => ['date', 'required']
        ];
    }
}
