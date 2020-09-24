import React from 'react';
import Background from '../../components/Background';
import LoginButton from '../../components/LoginButton';
import LoginInput from '../../components/LoginInput';
import './styles.css';

const Landing = () => {
    return (
        <div id="page">
            <div className="background">
                <Background/>
            </div>
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
                            <LoginButton/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;