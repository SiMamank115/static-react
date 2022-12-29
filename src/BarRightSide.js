import "./App.css";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
export default function Rightbar() {
    return (
        <div className="w-[120px] border-r border-[#33415c20] h-screen flex justify-center items-center">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element="" />
                    <Route path="about" element="" />
                    <Route path="dashboard" element="" />
                    <Route path="*" element="" />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
                <ul>
                    <li>
                        <Link to="/">Homie</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
        </div>
    );
}