'use client';

import { Calendar, Clock, DollarSign, MapPin, Pen, Trash2, Users, X } from 'lucide-react';

export default function BookingCard() {
    return (
        <article className="w-full rounded-lg border border-[#272F30]/30 bg-[#0F1515] p-3">
            <div className="flex w-full items-center justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="relative size-[40px] shrink-0 overflow-hidden rounded-lg border border-[#272F30]/30"></div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <h3 className="truncate text-sm font-medium text-white">
                            Green Arena Turf
                        </h3>
                        <span className="truncate text-xs font-normal text-green-500">
                            Football Turf
                        </span>
                    </div>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-2">
                    <div className="flex h-[30px] items-center justify-center rounded-md bg-yellow-500/5 px-2">
                        <span className="text-sm font-normal text-yellow-500">Pending</span>
                    </div>
                    <button className="cursor-pointer rounded-md bg-red-500/5 p-2">
                        <X size={14} className="text-red-500" />
                    </button>
                </div>
            </div>
            <div className="my-3 w-full min-w-0">
                <p className="truncate text-sm text-[#797C7C]">
                    A modern outdoor football turf with quality artificial grass, proper lighting,
                    changing rooms, and seating facilities for players and spectators.
                </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-between gap-2 md:flex-row md:gap-4">
                <div className="flex min-w-10 flex-1 items-center gap-2">
                    <MapPin size={16} className="shrink-0 text-green-500" />
                    <p className="truncate text-sm font-medium text-white">
                        Dhanmondi, Dhaka, Bangladesh
                    </p>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-2">
                    <Calendar size={16} className="shrink-0 text-green-500" />
                    <p className="text-sm font-medium whitespace-nowrap text-white">Aug 17, 2026</p>
                </div>
                <div className="flex min-w-0 items-center justify-center gap-2">
                    <Clock size={16} className="shrink-0 text-green-500" />
                    <p className="truncate text-sm font-medium text-white">06:00 PM - 08:00 PM</p>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-2">
                    <DollarSign size={16} className="shrink-0 text-green-500" />
                    <p className="text-sm font-medium whitespace-nowrap text-white">
                        Total 1500
                        <span className="text-xs font-normal text-[#797C7C]"></span>
                    </p>
                </div>
            </div>
        </article>
    );
}
