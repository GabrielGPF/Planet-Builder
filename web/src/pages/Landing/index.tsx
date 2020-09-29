import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import LoginInput from '../../components/LoginInput';
import api from '../../services/api';
import { UserProps } from '../UserForm';
import './styles.css';

const Landing = () => {
    let history = useHistory();
    const { control, handleSubmit, errors } = useForm<UserProps>({
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

    async function login(data: UserProps){
        try{
            await api.post('/login', data).then((result) => {
                localStorage.setItem('user', ((result.data as unknown) as UserProps).email);

                history.push("/planets");
            });
        } catch(e){
            alert("Credenciais incorretas");
        }
    }

    const onSubmit = (data: UserProps) => {
        login(data);
    };
    
    return (
        <div id="page">
            <Background/>
            <div className="rest">
                <div className="title">
                    Planet Builder
                </div>
                <div className="container">
                    <form id="page-landing" onSubmit={handleSubmit(onSubmit)}>
                        <Controller name='email' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                            return <LoginInput label='E-mail:' error={errors.email ? true : false} onChange={onChange} onBlur={onBlur} value={value} name={name} type="text"/>
                        }}/>
                        <div style={{ marginTop: '20px' }}>
                            <Controller name='password' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                                return <LoginInput label='Senha:' error={errors.password ? true : false} onChange={onChange} onBlur={onBlur} value={value} name={name} type="password"/>
                            }}/>
                        </div>
                        <span className="login-button">
                            <button className='button' type='submit'>Log-In</button>
                        </span>
                        <div className="new-user">
                            Precisando de uma conta?{" "}
                            <a href="/newUser">Registre-se</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Landing;