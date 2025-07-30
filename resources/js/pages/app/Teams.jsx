import React, { useState } from "react";

// Hooks
import { useGetData } from "../../hooks/useapi";

// Components
import LoadingComponent from "../../components/LoadingComponent";
import { Link } from "react-router-dom";

export default function Team() {
    const [search, setSearch] = useState("");

    const { data: teams, loading: teamsLoading } = useGetData(
        `/teams?search=${search}`
    );

    if (teamsLoading) return <LoadingComponent />;

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
                        placeholder="Buscar selecciones por nombre o código"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className="grow"
                    />
                </label>
            </div>

            {/* content */}
            <div className="flex flex-col gap-4">
                {teams.length === 0 && (
                    <div className="text-4xl font-bold text-center">
                        No se encontró ese país
                    </div>
                )}
                {teams.map((team) => (
                    <Link
                        to={`/teams/${team.team_id}`}
                        key={team.team_id}
                        className="w-full p-3 bg-white/10 border rounded-xl flex gap-5 items-center"
                    >
                        <figure
                            className="aspect-square overflow-hidden rounded-lg bg-white/10"
                            style={{ width: "10rem", flexShrink: 0 }}
                        >
                            <img
                                src={team.team_flag}
                                alt={`Imagen del equipo ${team.team_name}`}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <h1 className="text-3xl font-bold">
                            {team.team_name} ({team.team_code})
                        </h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}
