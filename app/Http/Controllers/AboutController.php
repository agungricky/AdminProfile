<?php

namespace App\Http\Controllers;

use App\Models\Ketrampilan_Nonteknis;
use App\Models\Prestasi;
use App\Models\RiwayatPendidikan;
use App\Models\Tech_digunakan;
use App\Models\Tentang_saya;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tentangSaya = Tentang_saya::first();
        $riwayatPendidikan = RiwayatPendidikan::all();
        $prestasi = Prestasi::all();
        $tech = Tech_digunakan::all();
        $ketrampilanNonTeknis = Ketrampilan_Nonteknis::all();
        return Inertia::render('About/Index', compact('tentangSaya', 'riwayatPendidikan', 'prestasi', 'tech', 'ketrampilanNonTeknis'));
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
