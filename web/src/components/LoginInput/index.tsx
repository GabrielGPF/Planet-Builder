import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({
    label,
    name,
    error,
    ...rest
}) => {
    return (
        <div className='login-input-box'>
            <label htmlFor={name}>{label}</label>
            <input className='login-input' id={name} {...rest}/>
            {error && <label className='error'>{"Campo obrigatório"}</label>}
        </div>
    );
}

export default LoginInput;