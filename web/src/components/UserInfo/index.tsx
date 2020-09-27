import React, { InputHTMLAttributes } from 'react';
import './styles.css';

//User Info
interface UserInfoProps extends InputHTMLAttributes<HTMLInputElement> {
    email: string
}

const UserInfo: React.FC<UserInfoProps> = ({
    email
}) => {
    return (
        <div className='user-info'>
            {email}
            <i className='fa fa-times'></i>
        </div>
    );
}

export default UserInfo;