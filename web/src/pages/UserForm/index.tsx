import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css';

export interface UserProps{
    email: string,
    password: string
}

const UserForm = () => {
    let history = useHistory();
    const { register, control, handleSubmit, errors } = useForm<UserProps>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,
    });

    async function createUser(data: UserProps){
        await api.post('/newUser', data).then(() => {
            history.goBack();
        });
    }

    const onSubmit = (data: UserProps) => {
        createUser(data);
    };

    const validateEmail = (email: string) => {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const test = regexp.test(email);
        return test;
    }
    
    return (
        <div id='planet-form'>
            <Background/>
            <form className="user-form-sheet" onSubmit={handleSubmit(onSubmit)}>
                <span className='user-back-button' onClick={history.goBack}><i className='fa fa-times'></i></span>
                <div style={{ marginTop: '20px' }}>
                    <Controller name='email' control={control} rules={{required: true, validate: validateEmail}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='E-mail' message={errors.email && errors.email.type == 'validate' ? "E-mail inválido" : undefined} error={errors.email ? true : false} onChange={onChange} onBlur={onBlur} value={value} name={name} type="text"/>
                    }}/>
                </div>
                <Controller name='password' control={control} rules={{required: true, minLength: 8}} render={({ onChange, onBlur, value, name }) => {
                    return <Input label='Senha' message={errors.password && errors.password.type == 'minLength' ? "Mínimo de 8 caracteres" : undefined} error={errors.password ? true : false} onChange={onChange} onBlur={onBlur} value={value} name={name} type="password"/>
                }}/>
                <button className='user-register-button'>Cadastrar</button>
            </form>
        </div>
    );
}

export default UserForm;