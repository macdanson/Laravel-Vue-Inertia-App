<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostCommentResource extends JsonResource
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
            'post_id' => $this->post_id,
            'post' => new ProductResource($this->whenLoaded('post')),
            'author' => $this->author->only('name', 'email', 'image_path'),
            'comment' => $this->comment,
            'date' => Carbon::parse($this->created_at)->diffForHumans(),
        ];
    }
}
