<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller{

    public function users() {
        // $user = auth()->user();
 
        // if($user){
            $users = User::all();
            return response()->json([
                'status' => 'success',
                'data' => $users,
            ]);
        // }
    }

}
