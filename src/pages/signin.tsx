import Navigation from '@/components/navigation';
import SignInForm from '@/components/signInForm';

export default function SignIn() {
    return (
        <>
            <Navigation />
            <main className='bg-primary h-screen flex justify-center items-center text-quaternary'>
                <SignInForm />
            </main>
        </>
    );
}