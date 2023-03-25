<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function user(){
        return $this->belongsTo(User::class,"receiver_id")->select('id', 'name', 'profile_picture');
    }
}
