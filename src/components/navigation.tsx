import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

    return (
        <>
            <div className="flex flex-row h-16 bg-gradient-to-r from-slate-900 to-slate-800 sticky top-0">
                <div className="flex basis-1/4 justify-start items-center ml-10"><Image src="/logo2.svg" alt="logo" width={80} height={80}/></div>
                <div className="flex basis-2/4 justify-center items-center space-x-6">
                    <Link href="/" className="text-slate-200 font-bold transition duration-500 hover:text-slate-100">Home</Link>
                    <Link href="/about" className="text-slate-200 font-bold transition duration-500 hover:text-slate-100">About</Link>
                </div>
                <div className="flex flex-row basis-1/4 justify-end mr-10 space-x-4">
                    <button className="rounded-lg px-5 my-2 bg-slate-900 text-slate-200 font-bold transition duration-500 hover:bg-slate-200 hover:text-slate-900">Sign in</button>
                    <button className="rounded-lg px-5 my-2 bg-slate-900 text-slate-200 font-bold transition duration-500 hover:bg-slate-200 hover:text-slate-900">Sign up</button>
                </div>
            </div>
        </>
    );
}