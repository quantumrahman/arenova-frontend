'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import registerValidationSchema from '@/schema/RegisterValidationSchema/RegisterValidationSchema';

export default function RegisterForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerValidationSchema),
    });

    const handleFormSubmit = (form) => {
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex w-full flex-col sm:flex-row sm:gap-4">
                <div className="flex w-full flex-col items-center">
                    <label htmlFor="name" className="block w-full text-sm font-medium text-white">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        aria-label="input"
                        role="input"
                        placeholder="Your name"
                        {...register('name')}
                        className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.name ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                    />
                    <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                        {errors?.name && errors?.name?.message}
                    </span>
                </div>
                <div className="flex w-full flex-col items-center">
                    <label htmlFor="photo" className="block w-full text-sm font-medium text-white">
                        Photo
                    </label>
                    <input
                        id="photo"
                        type="text"
                        aria-label="input"
                        role="input"
                        placeholder="Your photo url"
                        {...register('photo')}
                        className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.photo ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                    />
                    <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                        {errors?.photo && errors?.photo?.message}
                    </span>
                </div>
            </div>
            <div className="flex w-full flex-col items-center">
                <label htmlFor="email" className="block w-full text-sm font-medium text-white">
                    Email address
                </label>
                <input
                    id="email"
                    type="text"
                    aria-label="input"
                    role="input"
                    placeholder="Your email"
                    {...register('email')}
                    className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.email ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                />
                <span className="mt-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                    {errors?.email && errors?.email.message}
                </span>
            </div>
            <div className="flex w-full flex-col items-center">
                <label htmlFor="password" className="block w-full text-sm font-medium text-white">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    aria-label="input"
                    role="input"
                    placeholder="Enter password"
                    {...register('password')}
                    className={`mt-2 w-full rounded-lg border px-3 py-2.5 text-sm font-medium text-[#797C7C] transition-all duration-200 ease-linear outline-none placeholder:font-normal ${errors?.password ? 'border-red-500 caret-red-500 ring-3 ring-red-500/20' : 'border-[#272F30] caret-green-500 focus:border-green-500 focus:ring-3 focus:ring-green-500/20'}`}
                />
                <span className="my-[5px] block h-5 w-full text-right text-xs font-normal text-red-500">
                    {errors?.password && errors?.password?.message}
                </span>
            </div>
            <button
                type="submit"
                aria-label="button"
                role="button"
                className="w-full cursor-pointer rounded-lg border border-green-500 bg-green-500 py-2.5 text-sm font-medium text-white transition-all duration-200 ease-linear hover:bg-green-600"
            >
                Continue
            </button>
        </form>
    );
}
