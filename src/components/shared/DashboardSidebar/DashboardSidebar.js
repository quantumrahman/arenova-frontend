'use client';

import { LogOut, Plus, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { dashboardLinks } from '@/constants/DashboardLinks/DashboardLinks';

import Link from 'next/link';

export default function DashboardSidebar({ onToggle, setToggle }) {
    const pathname = usePathname();

    return (
        <aside
            className={`fixed z-20 h-screen w-64 border-r border-[#272F30]/30 bg-[#0F1515] transition-all duration-200 ease-linear md:static ${onToggle ? '-translate-x-0' : '-translate-x-64'} px-5 md:-translate-x-0`}
        >
            <div className="flex h-15 w-full items-center justify-between border-b border-[#272F30]/30 md:justify-center">
                <h1 className="w-fit text-xl font-semibold text-white uppercase">
                    Are<span className="text-green-500">nova</span>
                </h1>
                <button
                    type="button"
                    aria-label="button"
                    role="button"
                    onClick={() => setToggle((prev) => !prev)}
                    className="flex w-fit cursor-pointer items-center justify-center md:hidden"
                >
                    <X size={20} />
                </button>
            </div>
            <div className="flex h-[calc(100vh-60px)] w-full flex-col justify-between pt-7">
                <div className="w-full">
                    <Link
                        href={'/dashboard/facility/create'}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500 py-2.5 transition-all duration-200 ease-linear hover:bg-green-600"
                    >
                        <Plus size={20} />
                        <span className="text-sm font-medium text-white">Create Facility</span>
                    </Link>
                    <nav className="mt-5 w-full">
                        <ul className="flex w-full flex-col items-center justify-center gap-2.5">
                            {dashboardLinks.map((link) => {
                                return (
                                    <Link
                                        href={link.href}
                                        key={link.id}
                                        className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 transition-all duration-200 ease-linear ${pathname === link.href ? 'bg-green-500/5 text-green-500' : 'text-[#797C7C] hover:bg-green-500/5 hover:text-green-500'}`}
                                    >
                                        {link.icon}
                                        <span className="text-sm font-medium">{link.label}</span>
                                    </Link>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="w-full border-t border-[#272F30]/30 py-5">
                    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-red-500/5 py-2.5">
                        <LogOut size={20} className="text-red-500" />
                        <span className="text-sm font-medium text-red-500">Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
