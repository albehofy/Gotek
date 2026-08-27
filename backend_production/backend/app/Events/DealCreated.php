<?php

namespace App\Events;

use App\Models\Deal;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class DealCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $deal;

    public function __construct(Deal $deal)
    {
        $this->deal = $deal;
    }

    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('deals'),
        ];
    }

    public function broadcastAs(): string
    {
        return 'deal.created';
    }
}
