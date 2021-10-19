<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeopleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route:: prefix('api')->group(function(){
    //GET PEOPLE
    Route::get('getPeople', [PeopleController::class, 'index']);
    Route::post('postPeople',[PeopleController::class, 'store']);
});
