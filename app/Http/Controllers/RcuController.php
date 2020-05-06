<?php

namespace App\Http\Controllers;

use App\rcu;
use Illuminate\Http\Request;

class RcuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return rcu::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\rcu  $rcu
     * @return \Illuminate\Http\Response
     */
    public function show(rcu $rcu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\rcu  $rcu
     * @return \Illuminate\Http\Response
     */
    public function edit(rcu $rcu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\rcu  $rcu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, rcu $rcu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\rcu  $rcu
     * @return \Illuminate\Http\Response
     */
    public function destroy(rcu $rcu)
    {
        //
    }
}
