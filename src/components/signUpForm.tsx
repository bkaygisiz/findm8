import { HiOutlineMail, HiUserCircle, HiCheckCircle } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdPassword } from 'react-icons/md';
import { useState } from 'react';
import { SignUpFormData } from '@/types/types';
import Toastify from '@/components/functionals/toastify';
import axios from 'axios';
import bcrypt from 'bcryptjs';

export default function SignUpForm() {
    const [values, setValues] = useState<SignUpFormData>({
        email: '',
        username: '',
        password: '',
        comfirmPassword: '',
    });
    const [errorEmail, setErrorEmail] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorcomfirmPassword, setErrorcomfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(true);

    //Hash the password state
    const hashPwd = () => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(values.password, salt);
        console.log(hash)
        return hash;
    }

    // Handle inputs real time change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handled change")
        checkValueAndForm(event);
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        console.log(values)
    }

    // Submit forms data to the server
    const signUp = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (!isError && !isSomeValueEmpty()) {
            const data = axios.post('/api/signup', {
                email: values.email,
                username: values.username,
                password: hashPwd(),
            })
            Toastify({ message: data, type: 'promise' });

        }
        else {
            Toastify({ message: 'Please fill all the fields or assure that passwords are the same', type: 'error' });
        }
    };

    // Check if some value is empty or passwords are different at the submit
    const isSomeValueEmpty = () => {
        if (values.email === '' || values.username === '' || values.password === '' || values.comfirmPassword === '' || values.password !== values.comfirmPassword) {
            setIsError(true);
            return true;
        } else {
            return false;
        }
    };
    // Check if the value of the input is valid in real time
    const checkValueAndForm = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    setIsError(true);
                } else {
                    setErrorEmail('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                    setIsError(false);

                }
                break;
            case 'username':
                if (!value.match(usernameRegex)) {
                    setErrorUsername('Username is not valid');
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                    setIsError(true);
                } else {
                    setErrorUsername('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                    setIsError(false);
                }
                break;
            case 'password':
                if (!value.match(passwordRegex)) {
                    setErrorPassword('Password is not valid ! Minimum 8 characters');
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                    setIsError(true);
                } else {
                    setErrorPassword('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                    if (value.length <= 8)
                        setMessage('weak');
                    else if (value.length <= 16)
                        setMessage('medium');
                    else
                        setMessage('strong');
                    setIsError(false);
                }
                break;
            case 'comfirmPassword':
                if (value !== values.password) {
                    setErrorcomfirmPassword('Passwords do not match');
                    event.target.className = event.target.className.replaceAll('ring-slate-800', 'ring-red-500');
                    setIsError(true);
                } else {
                    setErrorcomfirmPassword('');
                    event.target.className = event.target.className.replaceAll('ring-red-500', 'ring-slate-800');
                    setIsError(false);
                }
                break;
        }
    };

    return (
        <>
            <form onSubmit={signUp} className="flex flex-col lg:overflow-hidden md:overflow-scroll overflow-scroll py-10 lg:w-2/5 md:w-4/5 md:h-3/5 lg:h-4/5 h-3/5 w-4/5 animate-fadin shadow-slate-900 shadow-2xl rounded-2xl ring-2 ring-slate-800 bg-gradient-to-r from-slate-800 to-slate-900 lg:space-y-8 md:space-y-10 space-y-6">
                <h1 className="flex flex-col text-slate-100 md:text-5xl text-xl font-bold break-words m-auto">Sign up</h1>
                <div className='w-4/6 flex flex-col m-auto'>
                    <label className='block font-bold w-4/5 break-words lg:text-xl md:text-xl text-sm m-auto'>
                        <HiOutlineMail className='lg:text-xl md:text-xl text-md inline-block' /> Email
                    </label>
                    <input
                        type="text"
                        name='email'
                        onChange={handleChange}
                        placeholder='Email'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none m-auto"
                    />
                    <p className="text-red-500 w-4/5 m-auto">{errorEmail}</p>
                </div>
                <div className='w-4/6 flex flex-col m-auto'>
                    <label className='block font-bold w-4/5 break-words lg:text-xl md:text-xl text-sm m-auto'>
                        <HiUserCircle className='inline-block lg:text-xl md:text-xl text-md' /> Username
                    </label>
                    <input
                        type="text"
                        name='username'
                        onChange={handleChange}
                        placeholder='Username'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none m-auto"
                    />
                    <p className="text-red-500 w-4/5 m-auto">{errorUsername}</p>
                </div>
                <div className='w-4/6 flex flex-col m-auto'>
                    <label className='block font-bold w-4/5 break-words lg:text-xl md:text-xl text-sm m-auto'>
                        <MdPassword className='inline-block lg:text-xl md:text-xl text-md' /> Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        onChange={handleChange}
                        placeholder='************'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none m-auto"
                    />
                    <p className="text-red-500 break-words text-sm w-4/5 m-auto">{errorPassword}</p>
                    <p className="text-slate-500 text-xs w-4/5 m-auto">Password security : {message}</p>
                </div>
                <div className='w-4/6 flex flex-col m-auto'>
                    <label className='block font-bold w-4/5 break-words lg:text-xl md:text-xl text-sm m-auto'>
                        <MdPassword className='inline-block lg:text-xl md:text-xl text-md' /> Comfirm password
                    </label>
                    <input
                        type="password"
                        name='comfirmPassword'
                        onChange={handleChange}
                        placeholder='************'
                        className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none m-auto"
                    />
                    <p className="text-red-500 w-4/5 m-auto">{errorcomfirmPassword}</p>
                </div>
                <div className='w-4/6 flex flex-col m-auto'>
                    <input
                        type="submit"
                        value='Sign up'
                        className="bg-slate-900 lg:w-2/5 md:w-28 w-3/5 break-words p-1 rounded-sm border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300 active:bg-slate-900 active:ring-2 active:ring-green-700 focus:outline-none m-auto"
                    />
                </div>
            </form>
        </>
    );
}