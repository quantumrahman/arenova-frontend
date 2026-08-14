'use client';

import '../globals.css';

import AuthFooter from '@/components/shared/AuthFooter/AuthFooter';

export default function AuthLayout({ children }) {
    return (
        <main className="relative min-h-screen w-full">
            <div className="absolute inset-0 bg-[url('/svg/grain-bg.svg')] bg-cover bg-center bg-repeat"></div>
            <div className="relative z-10 flex min-h-screen flex-col items-center px-5">
                <div className="flex w-full flex-1 items-center justify-center">{children}</div>
                <AuthFooter />
            </div>
        </main>
    );
}
