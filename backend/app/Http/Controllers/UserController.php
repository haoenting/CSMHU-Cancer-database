<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Action;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller{
    public function register(Request $request) {
        // validate request parameters
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:20',
            'account' => 'required|alpha_num|max:20',
            'password' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false, 
                'message' => '資料規格有誤!',
                'errors' => $validator->errors()
            ], 422);
        }

        if (Employee::where('account', $request->input('account'))->exists()) {
            return response()->json([
                'success' => false,
                'message' => '帳號已經存在!',
                'errors' => $validator->errors()
            ], 401);
        }
        // create new user
        Employee::create([
            'username' => $request->input('username'),
            'account' => $request->input('account'),
            'password' => Hash::make($request->input('password')),
        ]);


        // Record operation Register
        Action::create([
            'username' => $request->input('username'),
            'action' => 'Register',
        ]);

        return response()->json([
            'success' => true, 
            'message' => '註冊成功!']);
    }

    public function login(Request $request){
        // check the currect mathod
        try {
            if (!$request->isMethod('post')) {
                return response()->json([
                    'success' => false, 
                    'message' => 'Method not allowed'], 405);
            }
        
            // check the illegal characters
            $validator = Validator::make($request->all(), [
                'account' => 'required|alpha_num|max:20',
                'password' => 'required|string|max:20',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'success' => false, 
                    'message' => '輸入非法字元'], 422);
            }

            // check the account
            $employee = Employee::where('account', $request->input('account'))->first();
            
            if (!$employee) {
                return response()->json([
                    'success' => false, 
                    'message' => '帳號不存在'], 404);
            }
            // check if password matches
            if (!password_verify($request->input('password'), $employee->password)) {
                return response()->json([
                    'success' => false, 
                    'message' => '密碼錯誤'], 401);
            }
        
             // Record operation Login
            Action::create([
                'username' => $employee->username,
                'action' => 'Login',
            ]);
            $token = $employee->createToken('Login Token')->plainTextToken;

            $cookie = cookie(
                'auth_token', // Cookie 名稱
                $token,       // Cookie 值
                60,           // Cookie 的有效時間（分鐘）
                '/',          // Cookie 的作用路徑
                null,         // 預設 domain（null 表示與應用相同）
                true,         // 是否只能在 HTTPS 下傳輸（設置為 true 如果使用 HTTPS）
                true          // HttpOnly 屬性，防止前端 JS 訪問
            );
        
            return response()->json([
                'username' => $employee->username,
            ], 200)->withCookie($cookie);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage() // debug完要改掉
            ], 500);
        }

    }

    public function getAction(){
        $actions = Action::orderBy('created_at', 'desc')->take(15)->get();

        return response()->json($actions);
    }

    public function checkAuth(Request $request)
    {
        return response()->json([
            'authenticated' => true,
            'user' => $request->user()
        ]);
    }
    
}
