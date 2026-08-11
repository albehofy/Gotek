<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'title'       => $this->title,
            'description' => $this->description,
            'overview'    => $this->description,
            'main_image'  => $this->image,
            'image'       => $this->image,
            'category_id' => $this->category_id,
            'category'    => $this->category,
            'images'      => $this->images,
            'gallery'     => $this->gallery,
            'img_alt'     => $this->img_alt,
            'ViewInHome'  => $this->ViewInHome,
            'color'       => $this->color,
            'emoji'       => $this->emoji,
            'tags'        => $this->tags,
            'client'      => $this->client,
            'timeline'    => $this->timeline,
            'challenge'   => $this->challenge,
            'solution'    => $this->solution,
            'results'     => $this->results,
            'testimonial' => $this->testimonial,
            'deliverables'=> $this->deliverables,
        ];
    }
}
