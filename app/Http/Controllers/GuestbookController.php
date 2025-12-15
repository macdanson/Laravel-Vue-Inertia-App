<?php

namespace App\Http\Controllers;

use App\Http\Resources\SignatureResource;
use App\Models\Guestbook;
use Illuminate\Http\Request;

class GuestbookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $signature = Guestbook::when($request->search, function ($query) use ($request) {
            $query->whereAny(['name', 'email','message'], 'like', '%' . $request->search . '%');
        })->latest()->paginate()->withQueryString();

        return inertia('Guestbook/Index', [
            'signatures' => SignatureResource::collection($signature),
            'searchTerm' => $request->search,
        ]);
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
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        Guestbook::create($request->only('name', 'email', 'message'));

        return back()->with('message', 'Thank you for signing the guestbook!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Guestbook $guestbook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Guestbook $guestbook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Guestbook $guestbook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Guestbook $guestbook)
    {
        //
    }
}
