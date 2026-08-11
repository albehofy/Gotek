<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        // Decode features for both languages
        $featuresEnRaw = $this->getTranslation('features', 'en');
        $featuresArRaw = $this->getTranslation('features', 'ar');

        $featuresEn = is_string($featuresEnRaw) ? json_decode($featuresEnRaw, true) : $featuresEnRaw;
        $featuresAr = is_string($featuresArRaw) ? json_decode($featuresArRaw, true) : $featuresArRaw;

        if (!is_array($featuresEn)) $featuresEn = [];
        if (!is_array($featuresAr)) $featuresAr = [];

        $features = [];
        $maxFeatures = max(count($featuresEn), count($featuresAr));
        for ($i = 0; $i < $maxFeatures; $i++) {
            $features[] = [
                'en' => $featuresEn[$i] ?? '',
                'ar' => $featuresAr[$i] ?? '',
            ];
        }

        // Decode stats for both languages
        $statsEnRaw = $this->getTranslation('stats', 'en');
        $statsArRaw = $this->getTranslation('stats', 'ar');

        $statsEn = is_string($statsEnRaw) ? json_decode($statsEnRaw, true) : $statsEnRaw;
        $statsAr = is_string($statsArRaw) ? json_decode($statsArRaw, true) : $statsArRaw;

        if (!is_array($statsEn)) $statsEn = [];
        if (!is_array($statsAr)) $statsAr = [];

        $stats = [];
        $maxStats = max(count($statsEn), count($statsAr));
        for ($i = 0; $i < $maxStats; $i++) {
            $stats[] = [
                'label' => [
                    'en' => $statsEn[$i]['label'] ?? '',
                    'ar' => $statsAr[$i]['label'] ?? '',
                ],
                'sub' => [
                    'en' => $statsEn[$i]['sub'] ?? '',
                    'ar' => $statsAr[$i]['sub'] ?? '',
                ],
                'badge' => [
                    'en' => $statsEn[$i]['badge'] ?? '',
                    'ar' => $statsAr[$i]['badge'] ?? '',
                ],
            ];
        }

        return [
            'id'          => $this->id,
            'iconClass'   => $this->icon, 
            'category'    => $this->getTranslations('subtitle'), 
            'title'       => $this->getTranslations('title'),
            'description' => $this->getTranslations('description'),
            'features'    => $features, 
            'stats'       => $stats, 
            'ctaText'     => [
                'en' => $this->cta_text_en ?? 'Get Started',
                'ar' => $this->cta_text_ar ?? 'ابدأ الآن'
            ],
            'cta_url'     => $this->cta_url,
            'order'       => $this->order,
            // Expose properties for editing convenience in dashboard
            'title_en'    => $this->getTranslation('title', 'en'),
            'title_ar'    => $this->getTranslation('title', 'ar'),
            'description_en' => $this->getTranslation('description', 'en'),
            'description_ar' => $this->getTranslation('description', 'ar'),
            'subtitle_en' => $this->getTranslation('subtitle', 'en'),
            'subtitle_ar' => $this->getTranslation('subtitle', 'ar'),
        ];
    }
}