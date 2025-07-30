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

    public function plays(): BelongsToMany
    {
        return $this->belongsToMany(Play::class, 'play_teams', 'play_id', 'team_id')
            ->withPivot('team_local', 'team_goals', 'team_red', 'team_yellow');
    }

    public function stats()
    {
        $stats = [
            'points' => 0,
            'total_played' => 0,
            'win' => 0,
            'drawn' => 0,
            'lost' => 0,
            'goals_for' => 0,
            'goals_against' => 0,
            'goals_difference' => 0,
            'yellow' => 0,
            'red' => 0,
        ];

        $plays = $this->plays;

        foreach ($plays as $play) {
            $current = $play->teams->where('team_id', $this->team_id)->first();
            $other = $play->teams->where('team_id', '!=', $this->team_id)->first();

            // Goals
            $stats['goals_for'] += $current->pivot->team_goals;
            $stats['goals_against'] += $other->pivot->team_goals;
            $stats['yellow'] += $current->pivot->team_yellow;
            $stats['red'] += $other->pivot->team_red;

            // Matches
            if ($current->pivot->team_goals === $other->pivot->team_goals) {
                $stats['drawn'] += 1;
            } else if ($current->pivot->team_goals > $other->pivot->team_goals) {
                $stats['win'] += 1;
            } else {
                $stats['lost'] += 1;
            }
        }

        $stats['total_played'] = $stats['win'] + $stats['lost'] + $stats['drawn'];
        $stats['points'] = ($stats['win'] * 3) + $stats['drawn'];
        $stats['goals_difference'] = $stats['goals_for'] - $stats['goals_against'];

        return $stats;
    }
}
