import { toast } from 'react-toastify';

export default function Toastify({ message, type, pending, success, error }: { message: string | any, type: string, pending?: string, success?: string, error?: string }) {
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
                pending,
                success,
                error
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
