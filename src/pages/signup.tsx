import Navigation from '@/components/navigation';
import { Html, Head, Main, NextScript } from 'next/document'
import SignUpForm from '@/components/signUpForm';

export default function SignUp() {

    return (
        <>
            <Navigation />
            <main className='bg-primary h-screen flex justify-center items-center text-quaternary'>
                <SignUpForm/>
            </main>
        </>
    );
}
