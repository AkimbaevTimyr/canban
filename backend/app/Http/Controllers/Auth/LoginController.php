<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
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

        if(Auth::once(['email'=> $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $request->user()->createToken('access_token', expiresAt:now()->addDay())->plainTextToken;
            $request->session()->regenerate();

            return response()->json([
                'token' => $token,
            ], 200);
        } 

        throw ValidationException::withMessages([
            "message" => "Email or password incorrect"
        ])->status(401);
    }

    public function logout(Request $request)
    {
        try {
            $deletedTokens = $request->user()->tokens()->delete();

            if ($deletedTokens > 0) {
                return response()->json([
                    "message" => "Logged out successfully"
                ], 200);
            } else {
                return response()->json([
                    "message" => "No tokens were found to delete"
                ], 404);
            }
        } catch (Exception $e) {
            return response()->json([            
                "message" => "Something went wrong when you tried to logout"
            ], 500);    
        }
    }
}
