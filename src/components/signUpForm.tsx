import { HiOutlineMail, HiUserCircle } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import { MdPassword } from 'react-icons/md';
import { useState } from 'react';
import { SignUpFormData, User } from '@/types/types';
import Input from '@/components/input';
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
        checkInputValue(event);
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        console.log(values)
    }

    // Submit forms data to the server
    const register = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (!isError && !isWrongValues()) {
            const user: User = {
                email: values.email,
                username: values.username,
                password: hashPwd(),
            }
            const data = axios.post('/api/auth/register', user)
            Toastify({ message: data, type: 'promise', pending: "Pending...", success: "You are registered", error: "Error, user already exists" });

        }
        else {
            Toastify({ message: 'Please fill all the fields or assure that passwords are the same', type: 'error' });
        }
    };

    // Check if some value is empty or passwords are different right before submitting
    const isWrongValues = () => {
        if (values.email === '' || values.username === '' || values.password === '' || values.comfirmPassword === '' || values.password !== values.comfirmPassword) {
            setIsError(true);
            return true;
        } else {
            return false;
        }
    };
    // Check if the value of the input is valid in real time
    const checkInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <form onSubmit={register} className="flex flex-col overflow-y-auto py-10 lg:w-2/5 md:w-4/5 md:h-3/5 lg:h-4/5 h-3/5 w-4/5 animate-fadin shadow-slate-900 shadow-2xl rounded-2xl ring-2 ring-slate-800 bg-gradient-to-tr from-primary to-secondary lg:space-y-8 md:space-y-10 space-y-6">
                <h1 className="flex flex-col text-slate-100 md:text-5xl text-xl font-bold break-words mx-auto lg:my-14 md:my-10 my-5">Sign up</h1>
                <Input label="Email" name="email" type="text" onChange={handleChange} placeholder="Email" icon={<HiOutlineMail className='lg:text-xl md:text-xl text-md inline-block' />} error={errorEmail} />
                <Input label="Username" name="username" type="text" onChange={handleChange} placeholder="Username" icon={<HiUserCircle className='lg:text-xl md:text-xl text-md inline-block' />} error={errorUsername} />
                <Input label="Password" name="password" type="password" onChange={handleChange} placeholder="Password" icon={<MdPassword className='lg:text-xl md:text-xl text-md inline-block' />} error={errorPassword} pwdSecurity={message} />
                <Input label="Confirm password" name="comfirmPassword" type="password" onChange={handleChange} placeholder="Confirm password" icon={<MdPassword className='lg:text-xl md:text-xl text-md inline-block' />} error={errorcomfirmPassword} />
                <Input type="submit" value="Sign Up"/>
            </form>
        </>
    );
}