import { AxiosResponse } from 'axios';
import { ToastContainer, ToastContent, toast } from 'react-toastify';

export default function Toastify({ message, type }: { message: string | any, type: string }) {
    let notification: any;
    switch (type) {
        case 'success':
            notification = toast.success(message, {
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
            });
            break;
        case 'error':
            notification = toast.error(message, {
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
            });
            break;
        case 'warning':
            notification = toast.warning(message, {
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
            });
            break;
        case 'info':
            notification = toast.info(message, {
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
            });
            break;
        case 'promise':
            notification = toast.promise(message, {
                pending: 'Pending...',
                success: 'User created ! You will be redirected',
                error: 'Email or user already exists, or fields are wrong',
            }, {
                theme: 'dark',
                position: 'top-right',
            });
            break;
        default:
            notification = toast(message, {
                theme: 'dark',
                position: 'top-right',
                autoClose: 5000,
            });
            break;
    }

    return (
        <div>{notification}</div>
    );
}
