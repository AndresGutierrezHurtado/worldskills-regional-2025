import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="flex flex-col max-w-6xl mx-auto p-5">
            <main className="grow" style={{ marginBottom: "6rem" }}>
                <Outlet />
            </main>
            <footer
                className="fixed bottom-2 right-2 left-2 p-3 rounded-xl"
                style={{ backgroundColor: "#01943b", color: "#fcbe31", zIndex: 9999}}
            >
                <nav
                    className="w-full h-full flex items-center justify-center gap-5"
                    style={{ gap: "3rem" }}
                >
                    <Link to="/" className="cursor-pointer">
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
                    <Link to="/admin" className="cursor-pointer">
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
                            class="lucide lucide-user-round-cog"
                            aria-hidden="true"
                        >
                            <path d="m14.305 19.53.923-.382" />
                            <path d="m15.228 16.852-.923-.383" />
                            <path d="m16.852 15.228-.383-.923" />
                            <path d="m16.852 20.772-.383.924" />
                            <path d="m19.148 15.228.383-.923" />
                            <path d="m19.53 21.696-.382-.924" />
                            <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                            <path d="m20.772 16.852.924-.383" />
                            <path d="m20.772 19.148.924.383" />
                            <circle cx="10" cy="8" r="5" />
                            <circle cx="18" cy="18" r="3" />
                        </svg>
                    </Link>
                </nav>
            </footer>
            <div
                className="fixed bottom-1 left-1 w-10 h-10 blur-3xl bg-orange-500/25"
                style={{
                    width: "10rem",
                    height: "20rem",
                }}
            ></div>
            <div
                className="fixed bottom-1 right-1 w-10 h-10 blur-3xl bg-orange-500/25"
                style={{
                    width: "20rem",
                    height: "10rem",
                }}
            ></div>
            <div
                className="fixed bottom-1/2 left-1 w-10 h-10 blur-3xl bg-sky-500/25"
                style={{
                    width: "10rem",
                    height: "20rem",
                }}
            ></div>
            <div
                className="fixed bottom-1/2 right-1 w-10 h-10 blur-3xl bg-sky-500/25"
                style={{
                    width: "10rem",
                    height: "20rem",
                }}
            ></div>
        </div>
    );
}
