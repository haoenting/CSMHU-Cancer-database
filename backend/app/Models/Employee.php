<?php
namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens; 

class Employee extends Authenticatable{
    use HasApiTokens; 
    protected $connection = 'user_db';
    protected $table = 'employee'; 
    protected $fillable = [
        'username', 'account', 'password'
    ];

    protected $hidden = [
        'password', // 在序列化模型時隱藏密碼字段
    ];
    protected $primaryKey = 'account'; // 確保主鍵正確設置
    public $incrementing = false; // 主鍵自增
    protected $keyType = 'string';  // 主鍵類型
}
