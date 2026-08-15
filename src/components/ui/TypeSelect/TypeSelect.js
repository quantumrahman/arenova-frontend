'use client';

import { Asterisk, ChevronDown } from 'lucide-react';
import { facilityTypes } from '@/constants/FacilityTypes/FacilityTypes';
import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

export default function TypeSelect({ control }) {
    const selectRef = useRef(null);

    const [selectToggle, setSelectToggle] = useState(false);

    useEffect(() => {
        const handleOutSideClick = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setSelectToggle(false);
            }
        };

        document.addEventListener('mousedown', handleOutSideClick);

        return () => document.removeEventListener('mousedown', handleOutSideClick);
    }, []);

    return (
        <Controller
            name="facility_type"
            control={control}
            render={({ field, fieldState }) => {
                const selectedType = facilityTypes.find((type) => type.value === field.value);

                return (
                    <div ref={selectRef} className="relative w-full">
                        <div className="flex w-full flex-col items-center">
                            <label
                                htmlFor="facility-type"
                                className="block flex w-full items-center text-sm font-medium text-white"
                            >
                                Facility Type
                                <Asterisk size={13} className="mt-0.5 text-red-500" />
                            </label>
                            <button
                                id="facility-type"
                                type="button"
                                aria-label="button"
                                role="button"
                                onClick={() => setSelectToggle((prev) => !prev)}
                                className={`mt-2 flex h-[42px] w-full cursor-pointer items-center justify-between rounded-lg border px-3 text-left transition-all duration-200 ease-linear focus:ring-3 ${
                                    fieldState.error
                                        ? 'border-red-500 ring-3 ring-red-500/20'
                                        : 'border-[#272F30] focus:border-green-500 focus:ring-green-500/20'
                                }`}
                            >
                                <span
                                    className={
                                        selectedType
                                            ? 'text-sm font-normal text-[#797C7C]'
                                            : 'text-sm font-normal text-[#797C7C]/55'
                                    }
                                >
                                    {selectedType ? selectedType.label : 'Select facility type'}
                                </span>
                                <ChevronDown size={14} className="text-[#797C7C]" />
                            </button>
                            {selectToggle && (
                                <ul className="absolute top-19 left-0 z-10 w-full overflow-hidden rounded-lg border border-[#272F30] bg-[#0F1515] backdrop-blur-2xl">
                                    {facilityTypes.map((type) => (
                                        <li
                                            key={type.id}
                                            onClick={() => {
                                                field.onChange(type.value);

                                                field.onBlur();

                                                setSelectToggle(false);
                                            }}
                                            className={`w-full cursor-pointer px-4 py-2 text-sm font-medium ${
                                                field.value === type.value
                                                    ? 'bg-green-500/5 text-green-500'
                                                    : 'text-[#797C7C] hover:bg-green-500/5 hover:text-green-500'
                                            }`}
                                        >
                                            {type.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                {fieldState?.error?.message}
                            </span>
                        </div>
                    </div>
                );
            }}
        />
    );
}
