'use client';

import '../globals.css';

export default function MainLayout({ children }) {
    return <main className="flex w-full flex-col justify-between">{children}</main>;
}
