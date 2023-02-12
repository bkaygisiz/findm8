import { useEffect, useState } from "react";

export default function Article({type, src}: {type: string, src: string}) {
    return (
        <>
            <div className={`flex ${type} text-slate-300 space-x-4 mx-10 font-serif animate-fadin`}>
                <img className="w-1/5 border-solid border-slate-900 rounded-md" src={`${src}`} alt="image" />
                <div className="flex flex-col space-y-7 w-1/4">
                    <h1 className="font-bold text-5xl">Choose the game !</h1>
                    <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur, qui similique nam nulla corporis ipsa quasi, iste dignissimos provident quod, laboriosam omnis quidem autem atque recusandae? Fugit, delectus maxime?</p>
                </div>
            </div>
        </>
    );
}