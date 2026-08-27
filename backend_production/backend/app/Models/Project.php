<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectImage;

class Project extends Model
{
    protected $fillable = [
        'title', 'description', 'main_image', 'category_id', 'img_alt', 'ViewInHome',
        'color', 'emoji', 'tags', 'client', 'timeline', 'challenge', 'solution',
        'results', 'testimonial', 'deliverables'
    ];
    
    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'ViewInHome' => 'boolean',
        'tags' => 'array',
        'challenge' => 'array',
        'solution' => 'array',
        'results' => 'array',
        'testimonial' => 'array',
        'deliverables' => 'array',
    ];
    protected $appends = ['image', 'gallery', 'overview'];

    public function getImageAttribute()
    {
        if (!$this->main_image) {
            return null;
        }
        if (filter_var($this->main_image, FILTER_VALIDATE_URL)) {
            return $this->main_image;
        }
        return asset('storage/' . $this->main_image);
    }

    public function getGalleryAttribute()
    {
        // Ensure images relation is loaded or load it
        $images = $this->relationLoaded('images') ? $this->images : $this->images()->get();
        return $images->map(function ($img) {
            if (filter_var($img->image_path, FILTER_VALIDATE_URL)) {
                return $img->image_path;
            }
            return asset('storage/' . $img->image_path);
        })->toArray();
    }

    public function getOverviewAttribute()
    {
        return $this->description;
    }

    public function images() {
        return $this->hasMany(ProjectImage::class);
    }
    public function category() {
        return $this->belongsTo(Category::class);
    }
}
