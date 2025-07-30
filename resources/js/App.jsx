import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {/* View Routes */}
                    <Route index element={<>Principal</>} />
                    <Route path="/teams" element={<>Equipos</>} />
                    <Route path="/team/:id" element={<>Equipo</>} />
                    <Route path="/results" element={<>Resultaod</>} />
                    <Route path="/ranking" element={<>Posiciones</>} />
                    {/* Admin Routes */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
