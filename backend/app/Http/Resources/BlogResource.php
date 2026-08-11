<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
class BlogResource extends JsonResource
{
    public function toArray($request): array
    {
        $mediaUrl = null;
        if ($this->media_path) {
            $mediaUrl = filter_var($this->media_path, FILTER_VALIDATE_URL) ? $this->media_path : asset('storage/' . $this->media_path);
        }

        // Generate excerpt from translatable description
        $excerptEn = '';
        $excerptAr = '';
        if (is_array($this->description)) {
            $descEn = strip_tags($this->description['en'] ?? '');
            $descAr = strip_tags($this->description['ar'] ?? '');
            $excerptEn = strlen($descEn) > 150 ? substr($descEn, 0, 150) . '...' : $descEn;
            $excerptAr = mb_strlen($descAr) > 150 ? mb_substr($descAr, 0, 150) . '...' : $descAr;
        }

        return [
            'id'          => $this->id,
            'title'       => $this->title, // Translatable object
            'title_en'    => is_array($this->title) ? ($this->title['en'] ?? '') : '',
            'title_ar'    => is_array($this->title) ? ($this->title['ar'] ?? '') : '',
            'description' => $this->description, // Translatable object
            'description_en' => is_array($this->description) ? ($this->description['en'] ?? '') : '',
            'description_ar' => is_array($this->description) ? ($this->description['ar'] ?? '') : '',
            'content'     => $this->description, // Translatable object (maps to blog.content)
            'excerpt'     => [
                'en' => $excerptEn,
                'ar' => $excerptAr
            ],
            'media_url'   => $mediaUrl,
            'image'       => $mediaUrl ?? asset('assets/placeholder.jpg'), // maps to blog.image
            'media_type'  => $this->media_type,
            'loves'       => $this->loves_count ?? 0,
            'likes'       => $this->loves_count ?? 0, // maps to blog.likes
            'created_at'  => $this->created_at ? $this->created_at->format('Y-m-d H:i:s') : null,
            'date'        => $this->created_at ? $this->created_at->format('M d, Y') : null, // maps to blog.date
            'img_alt'     => $this->img_alt,
            'author'      => 'Media Glow Team', // fallback to avoid charAt(0) crash
            'readTime'    => '5 min',      // fallback read time
            'category'    => 'Technology',  // fallback category
        ];
    }
}