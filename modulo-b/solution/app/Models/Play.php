<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Play extends Model
{
    protected $primaryKey = 'play_id';

    public $timestamps = false;

    public $fillable = [
        'play_date',
        'play_start',
    ];

    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'play_teams', 'play_id', 'team_id')
            ->withPivot('team_local', 'team_goals', 'team_red', 'team_yellow');
    }
}
