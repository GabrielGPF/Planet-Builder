import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    ...rest
}) => {
    return (
        <div className='input-box'>
            <label htmlFor={name}>{label}</label>
            <input className='input' id={name} {...rest}/>
        </div>
    );
}

export default Input;