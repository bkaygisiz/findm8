import Navigation from "@/components/navigation";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <Navigation />
            </Head>
            <main className="bg-slate-800">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-5xl font-bold text-slate-200">About</h1>
                </div>
            </main>
        </>
    );
}