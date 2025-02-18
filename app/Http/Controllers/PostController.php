<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts =  Post::latest()->paginate(5);
        return Inertia::render('Home',['posts'=> $posts, 'flash' => session('success_message') ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('CreatePostForm');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $body = $request->validate([
'body' => ['required', 'min:5']
        ]);
Post::create( $body);

return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
    return inertia('ShowSinglePage',['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia('EditPage',['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $fields = $request->validate([
            'body' => ['required', 'min:5']
                    ]);
            $post->update($fields);
            
            return redirect('/');
                }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
    
        return redirect('/');
    }
    
}
