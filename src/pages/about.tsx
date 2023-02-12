import Article from "@/components/article";
import Navigation from "@/components/navigation";
import Head from "next/head";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Head>
                <Navigation />
            </Head>
            <main className="bg-slate-900">
                <div className="flex justify-center pt-16 animate-fadin">
                    <h1 className="text-slate-300 text-6xl">Join us and start making up your dream team !</h1>
                </div>
                <div className="flex flex-col justify-center h-screen">
                    <Article
                        type={"flex-row"}
                        src={"img.jpg"}
                    />
                    <Article 
                        type={"flex-row-reverse"}
                        src={"img3.jpg"}
                    />
                </div>
            </main>
        </>
    );
}