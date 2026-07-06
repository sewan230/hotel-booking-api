<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\hotelController\HotelController;
use App\Http\Controllers\hotelController\HotelDetailsController;
use App\Http\Controllers\hotelController\RoomDetailsController;
use App\Http\Controllers\hotelController\HotelRoomController; 
use App\Http\Controllers\hotelController\HotelRatingController; 
use App\Http\Controllers\LocationController;
use App\Http\Controllers\hotelDashboardController\HotelBookingDashController;
use App\Http\Controllers\BookingsController;
use App\Http\Controllers\hotelController\BookingDetailsController;
use App\Http\Controllers\PaymentController;
Route::get('/debug-routes', function () {
    return response()->json([
        'api_routes_loaded' => true,
        'timestamp' => now(),
    ]);
});

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);

// Route::post('/reset-password', [AuthController::class, 'resetPassword']);

// this is for the stripe method

// Route::post(
//     '/create-payment-intent',
//     [PaymentController::class, 'create']
// );

Route::get('/hotels', [HotelController::class, 'index']);

Route::get('/hotels/{id}', [HotelDetailsController::class, 'show']);

Route::get('/rooms', [HotelRoomController::class, 'index']);

Route::get('/rooms/{id}', [RoomDetailsController::class, 'show']);

Route::get('/locations', [LocationController::class, 'index']);

Route::get('/faqs/{category?}', [FaqController::class, 'index']);


// bookings  hotel routes
Route::get('/hotel/{hotelId}/bookings', [HotelBookingDashController::class, 'index']);

Route::get('/booking/{id}', [HotelBookingDashController::class, 'show']);

Route::put('/booking/{id}/confirm', [HotelBookingDashController::class, 'confirm']);

Route::put('/booking/{id}/cancel', [HotelBookingDashController::class, 'cancel']);

Route::put('/booking/{id}/complete', [HotelBookingDashController::class, 'complete']);
// rating hotel route
Route::post('/hotels/{id}/rate', [HotelRatingController::class, 'store']);

//the booking routes


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/bookings', [BookingsController::class, 'store']);
    Route::get('/my-bookings', [BookingsController::class, 'index']);
    Route::get('/bookings/{id}',   [BookingDetailsController::class, 'show']);
    Route::post('/booking/{id}/cancel',   [BookingsController::class, 'cancel']);
    // payment
    Route::post('/bookings/{id}/pay-intent', [PaymentController::class, 'create']);
    Route::post('/bookings/{id}/pay/confirm', [PaymentController::class, 'confirm']);

});

