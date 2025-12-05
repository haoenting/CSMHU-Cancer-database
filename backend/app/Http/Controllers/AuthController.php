<?php
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // 提供 CSRF cookie 給 SPA
    public function csrfCookie(){
        return response()->json(['csrf' => 'cookie set']);
    }

    public function login(Request $request){
        $credentials = $request->only('username', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $request->session()->regenerate(); // 防止 session fixation
        return response()->json(['user'=>Auth::user()]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['user'=>$user]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout successful']);
    }
}
