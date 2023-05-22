import Navigation from '@/components/navigation';
import { Html, Head, Main, NextScript } from 'next/document'
import SignUpForm from '@/components/signUpForm';

export default function SignUp() {

    return (
        <>
            <Navigation />
            <main className='bg-gradient-to-r from-indigo-900 to-slate-900 h-screen flex justify-center items-center text-slate-300'>
                <SignUpForm/>
            </main>
        </>
    );
}
