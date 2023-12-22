<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
            'password' => ['required', Password::defaults(),],
        ]);

        if ($validator->fails()) {
            throw ValidationException::withMessages([
                $validator->errors()
            ]);
        }

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
    
            return response()->json([
                'message' => 'You successfully registered',
                'redirect_url' => '/' 
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something were wrong',
                'errror' => $e->getMessage(), 
            ], 500);
        }
    }
}
