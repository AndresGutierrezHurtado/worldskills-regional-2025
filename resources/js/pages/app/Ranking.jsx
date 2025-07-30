import React from "react";
import { useGetData } from "../../hooks/useapi";
import LoadingComponent from "../../components/LoadingComponent";
import { PrinterIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Ranking() {
    const { data: ranking, loading: rankingLoading } =
        useGetData("/teams/ranking");

    if (rankingLoading) return <LoadingComponent />;

    const sortedRanking = ranking.sort(
        (a, b) => b.stats.points - a.stats.points
    );

    return (
        <div className="flex flex-col gap-8">
            {/* Title */}
            <h1
                className="text-center text-5xl text-yellow-500 font-bold"
                style={{ marginTop: "5rem" }}
            >
                Selecciones de fútbol
            </h1>

            {/* Content */}
            <div className="w-full overflow-x-auto bg-white/20 rounded-lg">
                <table>
                    <thead className="bg-white/20">
                        <tr>
                            <th>Nombre</th>
                            <th>PTS</th>
                            <th>PJ</th>
                            <th>PG</th>
                            <th>PE</th>
                            <th>PP</th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>GD</th>
                            <th>TA</th>
                            <th>TR</th>
                            <th>Calificado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranking.map((team, idx) => (
                            <tr>
                                <td>
                                    <Link
                                        to={"/teams/" + team.team_id}
                                        className="flex items-center gap-2 p-1"
                                    >
                                        {/* Flag */}
                                        <figure
                                            className="aspect-square overflow-hidden rounded bg-white/10"
                                            style={{
                                                width: "2rem",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <img
                                                src={team.team_flag}
                                                alt={`Imagen del equipo ${team.team_name}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </figure>

                                        <h1>{team.team_name}</h1>
                                    </Link>
                                </td>
                                <td>{team.stats.points}</td>
                                <td>{team.stats.total_player}</td>
                                <td>{team.stats.win}</td>
                                <td>{team.stats.drawn}</td>
                                <td>{team.stats.lost}</td>
                                <td>{team.stats.goals_for}</td>
                                <td>{team.stats.goals_against}</td>
                                <td>
                                    {team.stats.goals_difference < 0
                                        ? team.stats.goals_difference
                                        : `+${team.stats.goals_difference}`}
                                </td>
                                <td>{team.stats.yellow}</td>
                                <td>{team.stats.red}</td>
                                <td>{idx < 4 ? "✔" : "❌"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Next contestants */}
            <div className="space-y-2">
                <p className="leading-tight">
                    Los equipos que pasan a la siguiente fase son los
                    siguientes:{" "}
                </p>
                <ul className="pl-2 border-l-2 border-white/50">
                    {ranking.slice(0, 4).map((team) => (
                        <li>
                            {team.team_name} ({team.team_code})
                        </li>
                    ))}
                </ul>
            </div>
            {/* Print button */}
            <button
                onClick={() => window.print()}
                className="w-full text-white flex items-center justify-center cursor-pointer gap-2 bg-[green] rounded-lg p-2 active:scale-95 duration-100"
            >
                <PrinterIcon size={18} />
                Imprimir
            </button>
        </div>
    );
}
