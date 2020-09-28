import React from 'react';
import Background from '../../components/Background';
import './styles.css';

import UserInfo from '../../components/UserInfo';
import PlanetContainer, { PlanetProps } from '../../components/PlanetContainer';
import { Link } from 'react-router-dom';

const Planets = () => {
    const planets:PlanetProps[] = [
        {
            _id: '1',
            name: 'Plutao',
            color: '#32a852',
            galaxy: 'Via Lactea',
            age: 6,
            temperature: 230,
            size: 1609,
        },
    ];

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
                            <UserInfo email='gabriel.fardoski'/>
                        </div>
                    </div>
                    <div id='middle'>
                        <div className='planets-list'>
                            {planets.map((planet, index) => {
                                return (
                                    <PlanetContainer planet={planet} index={index}/>
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