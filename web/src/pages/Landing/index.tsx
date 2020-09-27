import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import './styles.css';

const Landing = () => {
    return (
        <div id="page">
            <Background/>
            <div className="rest">
                <div className="title">
                    Planet Builder
                </div>
                <div className="container">
                    <div id="page-landing">
                        <LoginInput type="text" name="email" label="E-mail"/>
                        <div style={{ marginTop: '20px' }}>
                            <LoginInput type="password" name="password" label="Password"/>
                        </div>
                        <span className="login-button">
                            <Link to='/planets'>
                                <LoginButton/>
                            </Link>
                        </span>
                        <div className="new-user">
                            Precisando de uma conta?{" "}
                            <Link to='/newUser'>
                                <a>Registre-se</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;