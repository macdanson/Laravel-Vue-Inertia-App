<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => Str::limit($this->content, 150),
            'body' => $this->content,
            'author' => $this->author->only('name', 'email', 'image_path'),
            'date' => Carbon::parse($this->created_at)->format('M j, Y'),
            'comments' => PostCommentResource::collection($this->whenLoaded('comments')),
            'category' => $this->category->name,
        ];
    }
}
