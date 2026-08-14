'use client';

import { Bell, ChevronRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function DashboardHeader({ setToggle }) {
    const pathname = usePathname();

    return (
        <header className="flex h-15 w-full items-center justify-between border-b border-[#272F30]/30 bg-[#0F1515] px-5">
            <div className="flex w-fit items-center justify-center gap-8">
                <button
                    type="button"
                    aria-label="button"
                    role="button"
                    onClick={() => setToggle((prev) => !prev)}
                    className="flex cursor-pointer items-center justify-center"
                >
                    <Menu size={20} />
                </button>
                <div className="hidden w-fit items-center justify-center gap-2 sm:flex">
                    <span className="text-sm font-normal text-[#797C7C]">Dashboard</span>
                    <ChevronRight size={16} className="mt-0.5 text-[#797C7C]" />
                    <span className="text-sm font-normal text-green-500">
                        {pathname === '/dashboard/facility/create'
                            ? 'Create facility'
                            : pathname === '/dashboard/facility/manage'
                              ? 'Manage facility'
                              : pathname === '/dashboard/bookings' && 'My Bookings'}
                    </span>
                </div>
            </div>
            <div className="flex w-fit items-center justify-center gap-5">
                <button
                    type="button"
                    aria-label="button"
                    role="button"
                    className="relative flex w-fit cursor-pointer items-center justify-center"
                >
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 block flex size-3 items-center justify-center rounded-full bg-green-600 text-[10px] font-normal text-white">
                        5
                    </span>
                </button>
                <div className="flex items-center justify-center gap-3">
                    <div className="relative size-8 rounded-full border border-[#272F30]/30 bg-[#0F1515]"></div>
                    <div className="flex flex-col gap-0.5">
                        <h4 className="text-xs leading-tight font-medium text-white">
                            Rakibul Rahman
                        </h4>
                        <p className="text-[10px] leading-tight font-normal text-[#797C7C]">
                            Owner
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
