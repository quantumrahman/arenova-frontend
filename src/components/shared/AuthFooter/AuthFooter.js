'use client';

export default function AuthFooter() {
    return (
        <div className="w-full py-5 text-center">
            <span className="text-sm font-normal text-[#797C7C]">
                Arenova Copyright &copy; {new Date().getFullYear()}
            </span>
        </div>
    );
}
