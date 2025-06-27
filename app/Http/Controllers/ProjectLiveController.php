<?php

namespace App\Http\Controllers;

use App\Models\projectLive;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectLiveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Project_Live/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(projectLive $projectLive)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(projectLive $projectLive)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, projectLive $projectLive)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(projectLive $projectLive)
    {
        //
    }
}
