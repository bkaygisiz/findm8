import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

    return (
        <>
            <div className="flex flex-row md:h-16 h-20 bg-slate-900 sticky top-0">
                <div className="flex basis-1/4 justify-start items-center md:ml-10 ml-4"><Image src="/logo.png" alt="logo" width={80} height={80} /></div>
                <div className="flex basis-2/4 justify-center items-center md:space-x-6 space-x-3">
                    <Link href="/" className="text-slate-200 font-bold transition duration-500 hover:text-slate-100 lg:text-lg md:text-sm text-xs">Home</Link>
                    <Link href="/about" className="text-slate-200 font-bold transition duration-500 hover:text-slate-100 lg:text-lg md:text-sm text-xs">About</Link>
                </div>
                <div className="flex flex-row basis-1/4 justify-end items-center lg:mr-10 mr-4 md:space-x-4 space-x-1">
                    <Link
                        href="/signup"
                        className="flex items-center justify-center rounded-lg lg:w-1/4 md:w-4/5 h-10 md:p-2 px-2 my-2 bg-left bg-slate-900 text-slate-200 font-bold lg:text-lg md:text-sm text-xs hover:bg-slate-200 hover:text-slate-900 duration-700"
                    >
                        Sign up
                    </Link>
                    <Link
                        href="/signin"
                        className="flex items-center justify-center rounded-lg lg:w-1/4 md:w-4/5 h-10 md:p-2 px-2 my-2 bg-slate-900 text-slate-200 font-bold lg:text-lg md:text-sm text-xs hover:bg-slate-200 hover:text-slate-900 duration-700"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </>
    );
}