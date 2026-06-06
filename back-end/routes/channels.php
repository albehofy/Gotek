<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('deals', function ($user) {
    return auth()->check();
});

Broadcast::channel('tasks', function ($user) {
    return auth()->check();
});
