import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="flex flex-col max-w-6xl mx-auto p-5">
            <main className="grow" style={{ marginBottom: '6rem'}}>
                <Outlet />
            </main>
            <footer
                className="fixed bottom-2 right-2 left-2 p-3 rounded-xl"
                style={{ backgroundColor: "green", color: "yellow" }}
            >
                <nav
                    className="w-full h-full flex items-center justify-center gap-5"
                    style={{ gap: "3rem" }}
                >
                    <Link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-house"
                            aria-hidden="true"
                        >
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                    </Link>
                    <img
                        src="/recursos/iconos/ball-icon.png"
                        alt="Imagen de inicio"
                        style={{ width: 45, aspectRatio: 1 }}
                    />
                    <Link to="/admin">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-house"
                            aria-hidden="true"
                        >
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
