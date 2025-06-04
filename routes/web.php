<?php

use App\Http\Controllers\homeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\projectController;
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

});

require __DIR__.'/auth.php';
