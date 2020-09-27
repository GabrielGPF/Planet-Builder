import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const LoginInput: React.FC<LoginInputProps> = ({
    label,
    name,
    ...rest
}) => {
    return (
        <div className='login-input-box'>
            <label htmlFor={name}>{label}</label>
            <input className='login-input' id={name} {...rest}/>
        </div>
    );
}

export default LoginInput;