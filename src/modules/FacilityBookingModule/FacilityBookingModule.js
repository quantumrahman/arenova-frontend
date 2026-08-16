'use client';

import BookingCard from '@/components/ui/BookingCard/BookingCard';
import ManageCard from '@/components/ui/ManageCard/ManageCard';
import { ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';

export default function FacilityBookingModule() {
    return (
        <section className="w-full">
            <div className="w-full">
                <h1 className="text-3xl font-medium text-white transition-all duration-200 ease-linear">
                    Bookings Facilities
                </h1>
                <p className="mt-2.5 text-sm font-normal text-[#797C7C]">
                    Track and manage all your facility bookings in one place.
                </p>
            </div>
            <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5 md:flex-row">
                <div className="flex w-full items-center rounded-lg border border-[#272F30] px-3">
                    <Search size={18} className="text-[#797C7C]" />
                    <input
                        type="text"
                        placeholder="Search facilities..."
                        className="w-full px-3 py-2.5 text-sm text-[#797C7C] outline-none"
                    />
                </div>
                <div className="flex w-full items-center justify-between rounded-lg border border-[#272F30] px-3 py-2.5">
                    <span className="text-sm text-[#797C7C]">All Type</span>
                    <ChevronDown size={14} className="text-[#797C7C]" />
                </div>
                <div className="flex w-full items-center justify-between rounded-lg border border-[#272F30] px-3 py-2.5">
                    <span className="text-sm text-[#797C7C]">Sort: Default</span>
                    <ChevronDown size={14} className="text-[#797C7C]" />
                </div>
            </div>
            <div className="mt-6 grid w-full grid-cols-1 gap-5">
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
            </div>
            <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5 sm:flex-row">
                <span className="text-sm text-[#797C7C]">Showing 1 to 6 of 12 facilities</span>
                <div className="flex items-center justify-center gap-2">
                    <button className="group cursor-pointer rounded-lg border border-[#272F30] p-2 transition-all duration-200 ease-linear hover:bg-green-500/5">
                        <ChevronLeft
                            size={14}
                            className="text-[#797C7C] transition-all duration-200 ease-linear group-hover:text-green-500"
                        />
                    </button>
                    <div className="flex size-[31px] items-center justify-center rounded-lg border border-green-500 bg-green-500">
                        <span className="text-sm font-medium text-white">01</span>
                    </div>
                    <button className="group cursor-pointer rounded-lg border border-[#272F30] p-2 transition-all duration-200 ease-linear hover:bg-green-500/5">
                        <ChevronRight
                            size={14}
                            className="text-[#797C7C] transition-all duration-200 ease-linear group-hover:text-green-500"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
