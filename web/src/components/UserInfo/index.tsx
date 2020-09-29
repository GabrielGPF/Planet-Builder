import React, { InputHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

//User Info
interface UserInfoProps extends InputHTMLAttributes<HTMLInputElement> {
    email: string
}

const UserInfo: React.FC<UserInfoProps> = ({
    email
}) => {
    const history = useHistory();

    return (
        <div className='user-info'>
            {email}
            <i onClick={() => {
                history.push('/');
                localStorage.removeItem('user');
            }} className='fa fa-times'></i>
        </div>
    );
}

export default UserInfo;