'use client';

import '../globals.css';

import DashboardSidebar from '@/components/shared/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/components/shared/DashboardHeader/DashboradHeader';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#0F1515]">
            <div className="absolute inset-0 bg-[url('/svg/grain-bg.svg')] bg-cover bg-center bg-repeat"></div>
            <div className="relative z-10 flex h-screen">
                <DashboardSidebar setToggle={setToggle} onToggle={toggle} />
                <div className="flex-1">
                    <DashboardHeader setToggle={setToggle} />
                    <main className="h-[calc(100vh-60px)] w-full overflow-y-auto p-5">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
