import { MedalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
    return (
        <div className="flex flex-col gap-10">
            {/* Title */}
            <h1
                className="text-center text-5xl font-bold z-10"
                style={{ marginTop: "5rem", color: "#f6c235" }}
            >
                Panel de gestión
            </h1>

            {/* Content */}
            <div className="flex flex-col gap-6">
                <Link
                    to="/admin/teams"
                    className="w-full z-10 p-3 bg-white/20 border border-white/50 rounded-xl flex gap-5 items-center bg-gradient-to-r from-amber-900 via-orange-900 to-sky-900"
                >
                    <figure
                        className="aspect-square rounded-full p-1"
                        style={{ backgroundColor: "#01943b" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-earth"
                            aria-hidden="true"
                        >
                            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                            <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </figure>
                    <h1
                        className="text-4xl font-bold"
                        style={{ lineHeight: 1.1 }}
                    >
                        Registrar selección
                    </h1>
                </Link>
                <Link
                    to="/admin/results"
                    className="w-full z-10 p-3 bg-white/20 border border-white/50 rounded-xl flex gap-5 items-center bg-gradient-to-r from-sky-900 via-blue-900 to-orange-900"
                >
                    <figure
                        className="aspect-square rounded-lg p-1"
                        style={{ backgroundColor: "#01943b" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-chart-column"
                            aria-hidden="true"
                        >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                            <path d="M18 17V9" />
                            <path d="M13 17V5" />
                            <path d="M8 17v-3" />
                        </svg>
                    </figure>
                    <h1
                        className="text-4xl font-bold"
                        style={{ lineHeight: 1.1 }}
                    >
                        Registrar partido
                    </h1>
                </Link>
            </div>
        </div>
    );
}
