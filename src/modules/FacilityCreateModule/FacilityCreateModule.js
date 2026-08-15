'use client';

import CreateForm from '@/components/ui/CreateForm/CreateForm';

export default function FacilityCreateModule() {
    return (
        <section className="w-full">
            <div className="w-full">
                <h1 className="text-3xl font-medium text-white transition-all duration-200 ease-linear">
                    Create Facility
                </h1>
                <p className="mt-2.5 text-sm font-normal text-[#797C7C]">
                    Add and manage your sports facilities with ease.
                </p>
            </div>
            <CreateForm />
        </section>
    );
}
