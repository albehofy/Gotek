<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FAQResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'question' => $request->header('Accept-Language') == 'ar' ? $this->question_ar : $this->question_en,
            'answer' => $request->header('Accept-Language') == 'ar' ? $this->answer_ar : $this->answer_en,
            'question_en' => $this->question_en,
            'question_ar' => $this->question_ar,
            'answer_en' => $this->answer_en,
            'answer_ar' => $this->answer_ar,
            'order' => $this->sort_order,
            'is_active' => (bool)$this->is_active,
        ];
    }
}
