'use client';

import UpdateForm from '@/components/ui/UpdateForm/UpdateForm';

export default function FacilityUpdateModule() {
    return (
        <section className="w-full">
            <div className="w-full">
                <h1 className="text-3xl font-medium text-white transition-all duration-200 ease-linear">
                    Update Facility
                </h1>
                <p className="mt-2.5 text-sm font-normal text-[#797C7C]">
                    Update your facility details and keep everything up to date.
                </p>
            </div>
            <UpdateForm />
        </section>
    );
}
