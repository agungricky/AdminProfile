<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\karier;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\prestasiController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\projectController;
use App\Http\Controllers\ProjectLiveController;
use App\Http\Controllers\TechLearing;
use App\Http\Controllers\TentangSayaController;
use App\Models\projectLive;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/Project', [projectController::class, 'index'])->name('project.index');
    Route::post('/Project/add', [projectController::class, 'store'])->name('project.store');
    Route::post('/projects/{id}/toggle-status', [ProjectController::class, 'toggleStatus'])->name('projects.status');
    Route::patch('/projects/{id}', [ProjectController::class, 'update'])->name('project.update');
    Route::delete('/project/{id}', [projectController::class, 'destroy'])->name('project.destroy');

    Route::get('/technologi/dipelajari', [TechLearing::class, 'index'])->name('techlearning.index');
    Route::patch('/techlearning/{id}/toggle-status', [TechLearing::class, 'toggleStatus'])->name('techlearning.status');

    Route::get('/karier', [karier::class, 'index'])->name('karier.index');
    Route::get('/Tentang-saya', [AboutController::class, 'index'])->name('About.index');

    Route::get('/Prestasi', [prestasiController::class, 'index'])->name('prestasi.index');

    Route::get('/Project-Live', [ProjectLiveController::class, 'index'])->name('projectLive.index');

    Route::get('/message', [MessageController::class, 'index'])->name('message.index');

});

require __DIR__.'/auth.php';
