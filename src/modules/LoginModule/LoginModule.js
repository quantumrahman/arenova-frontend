'use client';

import { FcGoogle } from 'react-icons/fc';

import Link from 'next/link';
import LoginForm from '@/components/ui/LoginForm/LoginForm';

export default function LoginModule() {
    return (
        <div className="w-full max-w-[430px] rounded-2xl border border-[#272F30]/30 bg-[#0F1515] p-8">
            <div className="w-full text-center">
                <Link href={'/'}>
                    <h1 className="text-xl font-semibold text-white uppercase">
                        Are<span className="text-green-500">nova</span>
                    </h1>
                </Link>
                <div className="mt-4 w-full">
                    <h3 className="text-lg font-medium text-white">Welcome Back!</h3>
                    <p className="text-sm font-normal text-[#797C7C]">
                        Log in to your Arenova account
                    </p>
                </div>
            </div>
            <button
                type="button"
                aria-label="button"
                role="button"
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-[#272F30] py-2.5 transition-all duration-200 ease-linear hover:bg-[#272F30]/30"
            >
                <FcGoogle size={18} />
                <span className="text-sm font-medium text-white">Continue with Google</span>
            </button>
            <div className="my-3 flex w-full items-center justify-center gap-2">
                <div className="mt-0.5 h-px w-full bg-linear-to-l from-[#272F30] to-transparent"></div>
                <span className="text-sm text-[#797C7C]">or</span>
                <div className="mt-0.5 h-px w-full bg-linear-to-r from-[#272F30] to-transparent"></div>
            </div>
            <LoginForm />
            <div className="mt-5 w-full text-center">
                <p className="text-sm font-normal text-[#797C7C]">
                    Don’t have an account?{' '}
                    <Link href={'/auth/register'} className="text-green-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
