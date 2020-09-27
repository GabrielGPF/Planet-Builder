import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import Input from '../../components/Input';
import './styles.css';

const UserForm = () => {
    let history = useHistory();

    function handleGoBack() {
        history.goBack();
    }

    return (
        <div id='planet-form'>
            <Background/>
            <div className="user-form-sheet">
                <span className='user-back-button' onClick={handleGoBack}><i className='fa fa-times'></i></span>
                <div style={{ marginTop: '20px' }}>
                    <Input label='E-mail' name='email' type="text"/>
                </div>
                <Input label='Senha' name='password' type="text"/>
                <Input label='Confirmação de Senha' name='passwordConfirmation' type="text"/>
                <button className='user-register-button'>Cadastrar</button>
            </div>
        </div>
    );
}

export default UserForm;