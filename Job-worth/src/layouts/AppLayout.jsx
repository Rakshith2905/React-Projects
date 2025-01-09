import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header.jsx';

function AppLayout() {
    return (
        <div>
            <div className="main-background"></div>
            <main className="min-h-screen container">
                <Header />
                <Outlet />
            </main>
            <footer className="flex justify-between px-8 py-4 bg-zinc-400">
                <img
                    src="/Jobworth_logo_dark.svg"
                    alt="company logo"
                    className="w-24"
                />
                <p className="text-black">
                    Created by Rakshith Keshavamurthy | &copy; 2025 Jobworth.
                    All rights reserved
                </p>
            </footer>
        </div>
    );
}

export default AppLayout;
