<?php

namespace App\Http\Controllers;

use App\Models\TeknologiDipelajari;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechLearing extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tech = TeknologiDipelajari::all();
        return Inertia::render('Home/SedangdiPelajari', compact('tech'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function toggleStatus(string $id, Request $request)
    {
        $teknologi = TeknologiDipelajari::findOrFail($id);
        TeknologiDipelajari::where('id', $id)->update([
            'status' => $teknologi->status == 'show' ? 'Hide' : 'show',
        ]);

        return redirect()->back()->with('success', 'Status updated successfully.');
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
