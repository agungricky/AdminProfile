<?php

namespace App\Http\Controllers;

use App\Models\project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class projectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $project = project::all();
        return Inertia::render('Home/Projects', compact('project'));
    }

    public function toggleStatus(Request $request, $id)
    {
        if ($request->status == "show") {
            $projectStatus = "show";
        } else {
            $projectStatus = "hide";
        }
        project::where('id', $id)->update(['status' => $projectStatus]);
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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'tahun' => 'required|numeric',
            'desc' => 'required|string|max:255',
            'link' => 'required|string|max:255',
        ]);

        project::create($validated);
        return redirect()->back();
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

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'tahun' => 'required|numeric',
            'desc' => 'required|string|max:255',
            'link' => 'required|string|max:255',
        ]);
        project::where('id', $id)->update($validated);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        project::findorFail($id)->delete();
        return redirect()->back();
    }
}
