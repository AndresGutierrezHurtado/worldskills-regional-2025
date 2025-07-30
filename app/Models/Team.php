<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Team extends Model
{
    protected $primaryKey = 'team_id';

    public $timestamps = false;

    public $fillable = [
        'team_name',
        'team_code',
        'team_flag',
    ];

    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'play_teams', 'play_id', 'team_id')
            ->withPivot('team_local', 'team_goals', 'team_red', 'team_yellow');
    }
}
