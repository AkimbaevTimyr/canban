<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{

    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $request->email)->first();

        if(is_null($user)) {
            abort(404, 'You dont have account. Please create new account');
        }

        $user->tokens()->delete();

        if ($validator->fails()) {
            throw ValidationException::withMessages([
                $validator->errors()
            ]);
        }

        if(Auth::attempt(['email'=> $request->email, 'password' => $request->password])) {
            $token = $request->user()->createToken('access_token', ['user:all']);
            $request->session()->regenerate();

            return response()->json([
                'token' => $token->plainTextToken
            ], 200);
        } 

        throw ValidationException::withMessages([
            "message" => "Email or password incorrect"
        ])->status(401);
    }

    public function logout(Request $request) {
        $user = auth()->user();

        $user->tokens()->delete();

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
       
        return response()->json([            
            "message" => "Logged out successfully"        
        ], 200);    
    }
}
