import React, { useState } from "react";
import { useGetData } from "../../hooks/useapi";
import LoadingComponent from "../../components/LoadingComponent";
import { Link } from "react-router-dom";

export default function Results() {
    const [search, setSearch] = useState("");
    const { data: results, loading: resultsLoading } = useGetData(
        `/plays?search=${search}`
    );

    if (resultsLoading) return <LoadingComponent />;

    return (
        <div className="flex flex-col gap-8">
            {/* Title */}
            <h1
                className="text-center text-5xl font-bold"
                style={{ marginTop: "5rem", color: "#f6c235" }}
            >
                Selecciones de fútbol
            </h1>

            {/* filters */}
            <div className="w-full">
                <label className="flex items-center gap-2 p-2 border rounded w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-search"
                        aria-hidden="true"
                    >
                        <path d="m21 21-4.34-4.34" />
                        <circle cx="11" cy="11" r="8" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Buscar resultados por fecha o país"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className="grow"
                    />
                </label>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
                {results.length === 0 && (
                    <div className="text-4xl font-bold text-center">
                        No se encontró un partido con esas condiciones
                    </div>
                )}
                {results.map((result, idx) => {
                    const local = result.teams.find(
                        (t) => t.pivot.team_local === 1
                    );
                    const other = result.teams.find(
                        (t) => t.pivot.team_local === 0
                    );

                    const date = new Date(
                        result.play_date + " " + result.play_start
                    );

                    console.log(result.teams);
                    return (
                        <div
                            key={idx}
                            className="w-full p-3 bg-white/10 border rounded-xl flex justify-between gap-5"
                        >
                            <Link
                                to={`/teams/${local.team_id}`}
                                className="flex flex-col gap-2 items-center"
                                style={{ maxWidth: "6.5rem", flexShrink: 0 }}
                            >
                                <figure
                                    className="aspect-square overflow-hidden rounded-lg bg-white/10 mx-auto"
                                    style={{
                                        width: "6rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    <img
                                        src={local.team_flag}
                                        alt={`Imagen del equipo ${local.team_name}`}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <h3 className="text-lg font-bold text-center leading-[110%]">
                                    {local.team_name} ({local.team_code})
                                </h3>
                            </Link>
                            <div
                                className="flex flex-col h-initial justify-center items-center"
                                style={{ flexShrink: 0 }}
                            >
                                <div className="flex items-center gap-2 text-2xl font-bold">
                                    <span>{local.pivot.team_goals}</span>
                                    <span>VS</span>
                                    <span>{other.pivot.team_goals}</span>
                                </div>
                                <div className="text-center text-sm opacity-80">
                                    <p>{date.toLocaleDateString("es-CO")}</p>
                                    <p className="text-xs opacity-80">
                                        {date.toLocaleTimeString("es-CO")}
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={`/teams/${other.team_id}`}
                                className="flex flex-col gap-2 items-center"
                                style={{ maxWidth: "6.5rem", flexShrink: 0 }}
                            >
                                <figure
                                    className="aspect-square overflow-hidden rounded-lg bg-white/10 mx-auto"
                                    style={{
                                        width: "6rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    <img
                                        src={other.team_flag}
                                        alt={`Imagen del equipo ${other.team_name}`}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <h3 className="text-lg font-bold text-center leading-[110%]">
                                    {other.team_name} ({other.team_code})
                                </h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
