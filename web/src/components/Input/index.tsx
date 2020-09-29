import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: boolean;
    message?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    error,
    message = "Campo obrigatório",
    ...rest
}) => {
    return (
        <div className='input-box'>
            <label className='label' htmlFor={name}>{label}</label>
            <input className='input' id={name} {...rest}/>
            {error && <label className='error'>{message}</label>}
        </div>
    );
}

export default Input;