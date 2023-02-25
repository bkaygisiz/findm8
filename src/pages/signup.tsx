import Navigation from '@/components/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FormData } from '@/types/types';

export default function SignIn() {

    const [values, setValues] = useState<FormData>({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errorEmail, setErrorEmail] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        checkValue(event);
        console.log(event.target.className)
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const signIn = async () => {
        console.log(values);
    };

    const checkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9_-]{3,}$/;
        const passwordRegex = /^[^\s]{8,}$/;
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case 'email':
                if (!value.match(emailRegex)) {
                    setErrorEmail('Email is not valid');
                    event.target.className = event.target.className.replaceAll('border-slate-700', 'border-red-500');
                } else {
                    setErrorEmail('');
                    event.target.className = event.target.className.replaceAll('border-red-500', 'border-slate-700');
                }
                break;
            case 'username':
                if (!value.match(usernameRegex)) {
                    setErrorUsername('Username is not valid');
                    event.target.className = event.target.className.replaceAll('border-slate-700', 'border-red-500');
                } else {
                    setErrorUsername('');
                    event.target.className = event.target.className.replaceAll('border-red-500', 'border-slate-700');
                }
                break;
            case 'password':
                if (!value.match(passwordRegex)) {
                    setErrorPassword('Password is not valid ! Minimum 8 characters');
                    event.target.className = event.target.className.replaceAll('border-slate-700', 'border-red-500');
                } else {
                    setErrorPassword('');
                    event.target.className = event.target.className.replaceAll('border-red-500', 'border-slate-700');
                    if (value.length <= 8)
                        setMessage('weak');
                    else if (value.length <= 16)
                        setMessage('medium');
                    else
                        setMessage('strong');
                }
                break;
            case 'comfirmPassword':
                if (value !== values.password) {
                    setErrorConfirmPassword('Passwords do not match');
                    event.target.className = event.target.className.replaceAll('border-slate-700', 'border-red-500');
                } else {
                    setErrorConfirmPassword('');
                    event.target.className = event.target.className.replaceAll('border-red-500', 'border-slate-700');
                }
                break;
        }
    };

    return (
        <>
            <Navigation />
            <main className="bg-slate-900 h-screen flex justify-center items-center text-slate-300">
                <form className="flex flex-col w-2/5 py-10 h-auto justify-center items-center animate-fadin shadow-xl rounded-lg border-solid border-2 border-slate-700 bg-slate-900 space-y-8">
                    <h1 className="text-slate-100 text-5xl font-bold break-words">Sign up</h1>
                    <div className='w-4/6 flex flex-col items-center'>
                        <label className='block font-bold w-4/5 break-words'>
                            Email
                        </label>
                        <input type="text" name='email' onChange={handleChange} placeholder='Email' className="bg-slate-900 w-4/5 p-1 rounded border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300" />
                        <p className="text-red-500 w-4/5">{errorEmail}</p>
                    </div>
                    <div className='w-4/6 flex flex-col items-center'>
                        <label className='block font-bold w-4/5 break-words'>
                            Username
                        </label>
                        <input type="text" name='username' onChange={handleChange} placeholder='Username' className="bg-slate-900 w-4/5 p-1 rounded border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300" />
                        <p className="text-red-500 w-4/5">{errorUsername}</p>
                    </div>
                    <div className='w-4/6 flex flex-col items-center'>
                        <label className='block font-bold w-4/5 break-words'>
                            Password
                        </label>
                        <input type="password" name='password' onChange={handleChange} placeholder='************' className="bg-slate-900 w-4/5 p-1 rounded border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300" />
                        <p className="text-red-500 break-all text-sm w-4/5">{errorPassword}</p>
                        <p className="text-slate-500 text-xs w-4/5">Password security : {message}</p>
                    </div>
                    <div className='w-4/6 flex flex-col items-center'>
                        <label className='block font-bold w-4/5 break-words'>
                            Comfirm password
                        </label>
                        <input type="password" name='comfirmPassword' onChange={handleChange} placeholder='************' className="bg-slate-900 w-4/5 p-1 break-all rounded border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300" />
                        <p className="text-red-500 w-4/5">{errorConfirmPassword}</p>
                    </div>
                    <div className='w-4/6 flex flex-col items-center'>
                        <button onClick={signIn} className="bg-slate-900 w-1/5 break-words p-1 rounded border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300">
                            Sign in
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}
