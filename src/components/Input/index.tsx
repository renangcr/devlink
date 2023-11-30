import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function Input(props: InputProps){
    return (
        <input
        className="border-0 h-9 rounded-md outline-none mb-3 px-3 py-3"
        {...props}
        />
    )
}