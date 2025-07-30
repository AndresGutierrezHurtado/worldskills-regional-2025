import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import AppLayout from "./layouts/AppLayout";

// Pages
import Menu from "./pages/Menu";
import Teams from "./pages/app/Teams";
import Team from "./pages/app/Team";
import Results from "./pages/app/Results";
import Ranking from "./pages/app/Ranking";
import Admin from "./pages/Admin";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {/* View Routes */}
                    <Route index element={<Menu />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/team/:id" element={<Team />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/ranking" element={<Ranking />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<Admin />} />
                    {/* 
                    <Route path="/admin/results" element={<Admin />} />
                    <Route path="/admin/teams" element={<Admin />} />
                    */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
