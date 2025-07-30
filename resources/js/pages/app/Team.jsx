import React from "react";
import { useParams } from "react-router-dom";

// Hooks
import { useGetData } from "../../hooks/useapi";

// Components
import LoadingComponent from "../../components/LoadingComponent";

export default function Team() {
    const { id } = useParams();
    const { data: team, loading: teamLoading } = useGetData(`/teams/${id}`);
    const { data: ranking, loading: rankingLoading } =
        useGetData("/teams/ranking");

    if (teamLoading || rankingLoading) return <LoadingComponent />;

    const sortedRanking = ranking.sort(
        (a, b) => b.stats.points - a.stats.points
    );

    const rank = sortedRanking.findIndex((t) => t.team_id === parseInt(id)) + 1;
    return (
        <div className="flex flex-col gap-8">
            {/* Flag */}
            <figure
                className="aspect-square overflow-hidden rounded-lg bg-white/10 mx-auto"
                style={{ width: "10rem", flexShrink: 0, marginTop: "5rem" }}
            >
                <img
                    src={team.team_flag}
                    alt={`Imagen del equipo ${team.team_name}`}
                    className="w-full h-full object-cover"
                />
            </figure>

            {/* Name */}
            <h1 className="text-center text-5xl text-yellow-500 font-bold">
                {team.team_name}
            </h1>

            {/* content */}
            <div className="flex flex-col gap-5">
                <h1 className="text-center text-4xl text-white font-bold">
                    Resumen
                </h1>
                <div>
                    <div className="flex justify-between items-center">
                        <p>Posicion</p>
                        <p>
                            {rank === 1 && "🏅"}
                            {rank === 2 && "🥈"}
                            {rank === 3 && "🥉"}
                            {rank}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Puntos</p>
                        <p>{team.stats.points}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Partidos Jugados</p>
                        <p>{team.stats.total_played}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Partidos Ganados</p>
                        <p>{team.stats.win}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Partidos Empatados</p>
                        <p>{team.stats.drawn}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Partidos Perdidos</p>
                        <p>{team.stats.lost}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Goles a favor</p>
                        <p>{team.stats.goals_for}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Goles en contra</p>
                        <p>{team.stats.goals_against}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Goles de diferencia</p>
                        <p>{team.stats.goals_difference}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
