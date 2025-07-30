<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('teams')->insert([
            [
                'team_id' => 1,
                'team_name' => 'Colombia',
                'team_code' => 'COL',
                'team_flag' => '/storage/teams/1.png',
            ],
            [
                'team_id' => 2,
                'team_name' => 'Argentina',
                'team_code' => 'ARG',
                'team_flag' => '/storage/teams/2.png',
            ],
            [
                'team_id' => 3,
                'team_name' => 'Bolivia',
                'team_code' => 'BOL',
                'team_flag' => '/storage/teams/3.png',
            ],
            [
                'team_id' => 4,
                'team_name' => 'Brazil',
                'team_code' => 'BRA',
                'team_flag' => '/storage/teams/4.png',
            ],
        ]);

        DB::table('plays')->insert([
            [
                'play_id' => 1,
                'play_date' => now(),
                'play_start' => '10:00:00',
            ],
            [
                'play_id' => 2,
                'play_date' => now()->subDays(1),
                'play_start' => '10:00:00',
            ],
            [
                'play_id' => 3,
                'play_date' => now()->subDays(2),
                'play_start' => '10:00:00',
            ],
            [
                'play_id' => 4,
                'play_date' => now()->subDays(3),
                'play_start' => '10:00:00',
            ],
        ]);

        DB::table('play_teams')->insert([
            // Play 1
            [
                'team_id' => 1,
                'play_id' => 1,
                'team_local' => true,
                'team_goals' => 3,
                'team_red' => 0,
                'team_yellow' => 1
            ],
            [
                'team_id' => 3,
                'play_id' => 1,
                'team_local' => false,
                'team_goals' => 2,
                'team_red' => 1,
                'team_yellow' => 2
            ],
            // Play 2
            [
                'team_id' => 2,
                'play_id' => 2,
                'team_local' => false,
                'team_goals' => 1,
                'team_red' => 0,
                'team_yellow' => 1
            ],
            [
                'team_id' => 4,
                'play_id' => 2,
                'team_local' => true,
                'team_goals' => 3,
                'team_red' => 0,
                'team_yellow' => 0
            ],
            // // Play 3
            // [
            //     'team_id' => 1,
            //     'play_id' => 1,
            //     'team_local' => true,
            //     'team_goals' => 3,
            //     'team_red' => 0,
            //     'team_yellow' => 1
            // ],
            // [
            //     'team_id' => 3,
            //     'play_id' => 1,
            //     'team_local' => false,
            //     'team_goals' => 2,
            //     'team_red' => 1,
            //     'team_yellow' => 2
            // ],
            // // Play 4
            // [
            //     'team_id' => 1,
            //     'play_id' => 1,
            //     'team_local' => true,
            //     'team_goals' => 3,
            //     'team_red' => 0,
            //     'team_yellow' => 1
            // ],
            // [
            //     'team_id' => 3,
            //     'play_id' => 1,
            //     'team_local' => false,
            //     'team_goals' => 2,
            //     'team_red' => 1,
            //     'team_yellow' => 2
            // ],
        ]);
    }
}
