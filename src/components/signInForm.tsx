import Input from '@/components/input';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '@/components/functionals/toastify';
import { HiOutlineMail, HiUserCircle } from 'react-icons/hi';
import { MdPassword } from 'react-icons/md';
import axios from 'axios';
import { useState } from 'react';

export default function SignInForm() {

    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const login = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        try {
            const data = axios.post('/api/auth/login', {
                email: values.email,
                password: values.password,
            })
            Toastify({ message: data, type: 'promise', pending: "Pending...", success: "You are logged in", error: "Error: Wrong credentials" });
        } catch (error) {
            Toastify({ message: error, type: 'error' });
        }
        
    }

    return (
        <form onSubmit={login} className='flex flex-col overflow-scroll py-10 lg:w-2/5 md:w-4/5 md:h-4/5 lg:h-3/5 h-3/6 w-4/5 animate-fadin shadow-slate-900 shadow-2xl rounded-2xl ring-2 ring-slate-800 bg-gradient-to-tr from-primary to-secondary lg:space-y-8 md:space-y-10 space-y-6'>
            <h1 className="flex flex-col text-slate-100 md:text-5xl text-xl font-bold break-words mx-auto lg:my-14 md:my-10 my-5">Login</h1>
            <Input label="Email" type="text" placeholder="Email" icon={<HiOutlineMail className='lg:text-xl md:text-xl text-md inline-block' />} />
            <Input label="Password" type="password" placeholder="Password" icon={<MdPassword className='lg:text-xl md:text-xl text-md inline-block' />} />
            <Input type='submit' value='Sign In' />
        </form>
    )
}