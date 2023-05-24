import { ReactElement } from "react";

export default function Input({ label, type, name, onChange, placeholder, icon, error, pwdSecurity = "", value }: { label?: string, type: string, name?: string, onChange?: any, placeholder?: string, icon?: ReactElement, error?: string, pwdSecurity?: string, value?: string }) {
    //If input is password, return the paragraph with password security
    const isPwd = ({ pwdSecurity }: { pwdSecurity: string }) => {
        if (pwdSecurity !== "")
            return <p className="text-slate-500 text-xs w-4/5 m-auto">Password security : {pwdSecurity} </p>
    }

    const renderType = () => {
        if (type === "submit") {
            return (
                <div className='w-4/6 flex flex-col m-auto'>
                    <input
                        type={type}
                        value={value}
                        className="bg-slate-900 lg:w-2/5 md:w-28 w-3/5 break-words p-1 rounded-sm border-solid border border-slate-700 shadow-md hover:bg-slate-800 duration-300 active:bg-slate-900 active:ring-2 active:ring-green-700 focus:outline-none m-auto"
                    />
                </div>
            )
        }
        else {
            return (
                <div className='w-4/6 flex flex-col m-auto'>
                    <label className='block font-bold w-4/5 break-words lg:text-xl md:text-xl text-sm m-auto'>
                        {icon} {label}
                    </label>
                    <input type={type} name={name} onChange={onChange} placeholder={placeholder} className="bg-slate-900 md:w-4/5 w-5/6 p-1 ring-1 ring-slate-800 rounded shadow-md hover:bg-slate-800 duration-300 focus:outline-none m-auto" />
                    <p className="text-red-500 w-4/5 m-auto">{error}</p>
                    {isPwd({ pwdSecurity })}
                </div>

            )
        }
    }
    return (
        <div>
            {renderType()}
        </div>
    )
}
