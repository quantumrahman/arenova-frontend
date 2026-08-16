'use client';

import { Asterisk, Clock, FileText, Image, List, MapPin, Tag } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import createValidationSchema from '@/schema/CreateValidationSchema/CreateValidationSchema';
import TypeSelect from '@/components/ui/TypeSelect/TypeSelect';
import Link from 'next/link';

export default function UpdateForm() {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(createValidationSchema),
        defaultValues: {
            facility_name: '',
            facility_type: '',
            description: '',
            location: '',
            capacity: '',
            image: '',
            price: '',
            available_slots: '',
        },
    });

    const handleFormSubmit = (form) => {
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6">
            <div className="flex w-full flex-col justify-center gap-6 sm:mt-8 2xl:flex-row">
                <div className="w-full flex-2 rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5">
                    <div className="w-full">
                        <div className="flex w-full items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-green-500/5">
                                <FileText size={20} className="text-green-500" />
                            </div>
                            <div className="w-fit">
                                <h4 className="text-base font-normal text-green-500">
                                    Basic Information
                                </h4>
                                <p className="text-sm font-normal text-[#797C7C]">
                                    Enter basic details about your facility.
                                </p>
                            </div>
                        </div>
                        <div className="mt-7 w-full">
                            <div className="flex w-full flex-col items-center justify-center xl:flex-row xl:gap-4">
                                <div className="flex w-full flex-col items-center">
                                    <label
                                        htmlFor="facility-name"
                                        className="block flex w-full items-center text-sm font-medium text-white"
                                    >
                                        Facility Name
                                        <Asterisk size={13} className="mt-0.5 text-red-500" />
                                    </label>
                                    <input
                                        id="facility-name"
                                        type="text"
                                        aria-label="input"
                                        role="input"
                                        placeholder="e.g. Green Field Turf"
                                        {...register('facility_name')}
                                        className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.facility_name ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                    />
                                    <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                        {errors?.facility_name && errors?.facility_name?.message}
                                    </span>
                                </div>
                                <TypeSelect control={control} />
                            </div>
                            <div className="flex w-full flex-col items-center">
                                <label
                                    htmlFor="description"
                                    className="block flex w-full items-center text-sm font-medium text-white"
                                >
                                    Description
                                    <Asterisk size={13} className="mt-0.5 text-red-500" />
                                </label>
                                <textarea
                                    id="description"
                                    type="text"
                                    aria-label="textbox"
                                    role="textbox"
                                    rows={5}
                                    placeholder="Describe your facility, features, and amenities..."
                                    {...register('description')}
                                    className={`mt-2 w-full resize-none rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.description ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                />
                                <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                    {errors?.description && errors?.description?.message}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex w-full items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-green-500/5">
                                <MapPin size={20} className="text-green-500" />
                            </div>
                            <div className="w-fit">
                                <h4 className="text-base font-normal text-green-500">Location</h4>
                                <p className="text-sm font-normal text-[#797C7C]">
                                    Specify the location of your facility.
                                </p>
                            </div>
                        </div>
                        <div className="mt-7 w-full">
                            <div className="flex w-full flex-col items-center">
                                <label
                                    htmlFor="location"
                                    className="block flex w-full items-center text-sm font-medium text-white"
                                >
                                    Location
                                    <Asterisk size={13} className="mt-0.5 text-red-500" />
                                </label>
                                <input
                                    id="location"
                                    type="text"
                                    aria-label="input"
                                    role="input"
                                    placeholder="e.g. Dhanmondi, Dhaka, Bangladesh"
                                    {...register('location')}
                                    className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.location ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                />
                                <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                    {errors?.location && errors?.location?.message}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex w-full items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-green-500/5">
                                <List size={20} className="text-green-500" />
                            </div>
                            <div className="w-fit">
                                <h4 className="text-base font-normal text-green-500">
                                    Facility Details
                                </h4>
                                <p className="text-sm font-normal text-[#797C7C]">
                                    Add important details about your facility.
                                </p>
                            </div>
                        </div>
                        <div className="mt-7 w-full">
                            <div className="flex w-full flex-col items-center">
                                <label
                                    htmlFor="capacity"
                                    className="block flex w-full items-center text-sm font-medium text-white"
                                >
                                    Capacity (Per Court)
                                    <Asterisk size={13} className="mt-0.5 text-red-500" />
                                </label>
                                <input
                                    id="capacity"
                                    type="text"
                                    aria-label="input"
                                    role="input"
                                    placeholder="e.g. 22"
                                    inputMode="numeric"
                                    {...register('capacity')}
                                    className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.capacity ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                />
                                <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                    {errors?.capacity && errors?.capacity?.message}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-1 flex-col items-center gap-6">
                    <div className="w-full rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5">
                        <div className="w-full">
                            <div className="flex w-full items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-green-500/5">
                                    <Image
                                        size={20}
                                        className="text-green-500"
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="w-fit">
                                    <h4 className="text-base font-normal text-green-500">Image</h4>
                                    <p className="text-sm font-normal text-[#797C7C]">
                                        Upload photos of your facility
                                    </p>
                                </div>
                            </div>
                            <div className="mt-7 w-full">
                                <div className="flex w-full flex-col items-center">
                                    <label
                                        htmlFor="facility-image"
                                        className="block flex w-full items-center text-sm font-medium text-white"
                                    >
                                        Image (URL)
                                        <Asterisk size={13} className="mt-0.5 text-red-500" />
                                    </label>
                                    <input
                                        id="facility-image"
                                        type="text"
                                        aria-label="input"
                                        role="input"
                                        placeholder="https://example.com/image.png"
                                        {...register('image')}
                                        className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.image ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                    />
                                    <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                        {errors?.image && errors?.image?.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5">
                        <div className="w-full">
                            <div className="flex w-full items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-green-500/5">
                                    <Tag size={20} className="text-green-500" />
                                </div>
                                <div className="w-fit">
                                    <h4 className="text-base font-normal text-green-500">
                                        Pricing
                                    </h4>
                                    <p className="text-sm font-normal text-[#797C7C]">
                                        Set hourly price range for your facility.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-7 w-full">
                                <div className="flex w-full flex-col items-center">
                                    <label
                                        htmlFor="price-per-hour"
                                        className="block flex w-full items-center text-sm font-medium text-white"
                                    >
                                        Price Per Hour
                                        <Asterisk size={13} className="mt-0.5 text-red-500" />
                                    </label>
                                    <input
                                        id="price-per-hour"
                                        type="text"
                                        aria-label="input"
                                        role="input"
                                        placeholder="e.g. 500"
                                        inputMode="numeric"
                                        {...register('price')}
                                        className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.price ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                    />
                                    <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                        {errors?.price && errors?.price?.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5">
                        <div className="w-full">
                            <div className="flex w-full items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-green-500/5">
                                    <Clock size={20} className="text-green-500" />
                                </div>
                                <div className="w-fit">
                                    <h4 className="text-base font-normal text-green-500">
                                        Availability
                                    </h4>
                                    <p className="text-sm font-normal text-[#797C7C]">
                                        Set default available time for bookings.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-7 w-full">
                                <div className="flex w-full flex-col items-center">
                                    <label
                                        htmlFor="available-time"
                                        className="block flex w-full items-center text-sm font-medium text-white"
                                    >
                                        Available Time
                                        <Asterisk size={13} className="mt-0.5 text-red-500" />
                                    </label>
                                    <input
                                        id="available-time"
                                        type="text"
                                        aria-label="input"
                                        role="input"
                                        placeholder="e.g. 06:00 AM - 08:00 AM"
                                        {...register('available_slots')}
                                        className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.available_slots ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                                    />
                                    <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                                        {errors?.available_slots &&
                                            errors?.available_slots?.message}
                                    </span>
                                    <div className="h-13 w-full overflow-x-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex w-full items-center justify-between rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-5">
                <Link
                    href={'/dashboard/facility/manage'}
                    className="cursor-pointer rounded-lg border border-[#272F30] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 ease-linear hover:bg-[#272F30]/30"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    aria-label="button"
                    role="button"
                    className="cursor-pointer rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 ease-linear hover:bg-green-600"
                >
                    Update Facility
                </button>
            </div>
        </form>
    );
}
