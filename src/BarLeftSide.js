import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
export default function Leftbar() {
    return (
        <div className="w-[120px] border-r border-[#33415c20] h-screen flex justify-center items-center">
            <div className="page-text text-[#212529]">
            <Routes>
                <Route path="/">
                    <Route index element={<Homie />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
            </div>
        </div>
    );
}


function Homie() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
