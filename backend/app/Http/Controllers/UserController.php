<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Action;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller{
    // 註冊
    public function register(Request $request)    {
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

        if (Employee::where('account', $request->account)->exists()) {
            return response()->json([
                'success' => false,
                'message' => '帳號已經存在!',
            ], 401);
        }

        // 建立新使用者
        $employee = Employee::create([
            'username' => $request->username,
            'account' => $request->account,
            'password' => Hash::make($request->password),
        ]);

        // 紀錄操作
        Action::create([
            'username' => $request->username,
            'action' => 'Register',
        ]);

        return response()->json([
            'success' => true,
            'message' => '註冊成功!'
        ]);
    }

    // 登入
    public function login(Request $request)
{
    $credentials = $request->only('account', 'password');

    // 用 Employee 模型查
    $employee = Employee::where('account', $credentials['account'])->first();

    if (!$employee || !Hash::check($credentials['password'], $employee->password)) {
        return response()->json(['success' => false, 'message' => '帳號或密碼錯誤']);
    }

    // 登入 session
    Auth::login($employee);

    return response()->json(['success' => true, 'username' => $employee->username]);
}

    // 登出
    public function logout(Request $request){
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => '已登出']);
    }

    // 取得最近操作紀錄
    public function getAction(){
      
        $actions = Action::orderBy('created_at', 'desc')->take(15)->get();
        return response()->json($actions);
    }

    // 驗證目前登入狀態
    public function checkAuth(Request $request){
        if (Auth::check()) {
            return response()->json([
                'authenticated' => true,
                'user' => auth()->user()
            ]);
        } else {
            return response()->json([
                'authenticated' => false,
                'user' => null
            ]);
        }
    }
}
