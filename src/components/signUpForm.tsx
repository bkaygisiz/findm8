import { HiOutlineMail, HiUserCircle, HiCheckCircle } from 'react-icons/hi';
import { MdPassword } from 'react-icons/md';
import { useState } from 'react';
import { FormData } from '@/types/types';

export default function SignUpForm() {
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

    const signUp = async () => {
        alert('Sign up !')
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
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                } else {
                    setErrorEmail('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                }
                break;
            case 'username':
                if (!value.match(usernameRegex)) {
                    setErrorUsername('Username is not valid');
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                } else {
                    setErrorUsername('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                }
                break;
            case 'password':
                if (!value.match(passwordRegex)) {
                    setErrorPassword('Password is not valid ! Minimum 8 characters');
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                } else {
                    setErrorPassword('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
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
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                } else {
                    setErrorConfirmPassword('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                }
                break;
        }
    };

    return (
        <>
            <form className="flex flex-col lg:w-2/5 md:w-4/5 md:h-4/5 w-4/5 py-10 justify-center items-center animate-fadin shadow-slate-900 shadow-2xl rounded-2xl ring-2 ring-slate-800 bg-gradient-to-r from-slate-800 to-slate-900 lg:space-y-10 md:space-y-10 space-y-6">
                <h1 className="text-slate-100 md:text-5xl text-4xl font-bold break-words">Sign up</h1>
                <div className='w-4/6 flex flex-col items-center'>
                    <label className='block font-bold w-4/5 break-words'>
                        <HiOutlineMail className='text-xl inline-block' /> Email
                    </label>
                    <input
                        type="text"
                        name='email'
                        onChange={handleChange}
                        placeholder='Email'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none"
                    />
                    <p className="text-red-500 w-4/5 mt-1">{errorEmail}</p>
                </div>
                <div className='w-4/6 flex flex-col items-center'>
                    <label className='block font-bold w-4/5 break-words'>
                        <HiUserCircle className='inline-block text-xl' /> Username
                    </label>
                    <input
                        type="text"
                        name='username'
                        onChange={handleChange}
                        placeholder='Username'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none"
                    />
                    <p className="text-red-500 w-4/5 mt-1">{errorUsername}</p>
                </div>
                <div className='w-4/6 flex flex-col items-center'>
                    <label className='block font-bold w-4/5 break-words'>
                        <MdPassword className='inline-block text-xl' /> Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        onChange={handleChange}
                        placeholder='************'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none"
                    />
                    <p className="text-red-500 break-all text-sm w-4/5 mt-1">{errorPassword}</p>
                    <p className="text-slate-500 text-xs w-4/5 mt-1">Password security : {message}</p>
                </div>
                <div className='w-4/6 flex flex-col items-center'>
                    <label className='block font-bold w-4/5 break-words'>
                        <MdPassword className='inline-block text-xl' /> Comfirm password
                    </label>
                    <input
                        type="password"
                        name='comfirmPassword'
                        onChange={handleChange}
                        placeholder='************'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none"
                    />
                    <p className="text-red-500 w-4/5 mt-1">{errorConfirmPassword}</p>
                </div>
                <div className='w-4/6 flex flex-col items-center'>
                    <button
                        onClick={signUp}
                        className="bg-slate-900 lg:w-1/5 md:w-28 w-3/5 break-words p-1 rounded-sm border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300 active:bg-slate-900 active:ring-2 active:ring-green-700 focus:outline-none"
                    >
                        <HiCheckCircle className='inline-block text-xl' /> Sign up
                    </button>
                </div>
            </form>
        </>
    );
}