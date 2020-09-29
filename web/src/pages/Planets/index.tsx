import React, { useEffect, useState } from 'react';
import Background from '../../components/Background';
import './styles.css';

import UserInfo from '../../components/UserInfo';
import PlanetContainer from '../../components/PlanetContainer';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export interface UserProps{
    id: string,
    email: string,
    password: string
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        api.get('/planets').then(response => {
            const apiPlanets = response.data;

            setPlanets(apiPlanets);
        });
    }, []);

    return (
        <div id='planets'>
            <Background/>
            <div className='margin'/>
            <div className='main-page'>
                <div id='wrapper'>
                    <div id='top'>
                        <div className='header'>
                            Planetas
                            <hr className='divider-vertical'/>
                            <Link to='/newPlanet'>
                                <button className='add-planet-button'>
                                    Adicionar Planeta <i className='fa fa-plus'></i>
                                </button>
                            </Link>
                            <hr className='divider-vertical'/>
                            <UserInfo email={localStorage.getItem('user') as string}/>
                        </div>
                    </div>
                    <div id='middle'>
                        <div className='planets-list'>
                            {planets && planets.map((planet, index) => {
                                return (
                                    <PlanetContainer key={index} planet={planet} index={index}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='margin'/>
        </div>
    );
}

export default Planets;