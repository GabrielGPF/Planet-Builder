import React, { InputHTMLAttributes, useState } from 'react';
import Background from '../../components/Background';
import './styles.css';

import PlanetPhotoScreen from '../../components/PlanetPhoto';
import UserInfo from '../../components/UserInfo';
import PlanetPhoto from '../../components/PlanetPhoto';

const Planets = () => {
    const planets = [
        {
            _id: '1',
            name: 'Plutao',
            color: '#32a852',
            galaxy: 'Via Lactea',
            age: '6 bilhoes',
            temperature: '−230 °C',
            size: '1609 mi',
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
                            <UserInfo email='gabriel.fardoski'/>
                        </div>
                    </div>
                    <div id='middle'>
                        <PlanetList planets={planets}/>
                    </div>
                </div>
            </div>
            <div className='margin'/>
        </div>
    );
}

export default Planets;

//Planet List
interface PlanetProps {
    _id: string,
    name: string,
    color: string,
    galaxy: string,
    age: string,
    temperature: string,
    size: string,
}

interface PlanetListProps {
    planets: Array<PlanetProps>,
}

const PlanetList: React.FC<PlanetListProps> = ({
    planets,
}) => {
    const [modalDisplay, changeModalDisplay] = useState('none');

    const modal = document.getElementById("myModal");
                            
    window.onclick = (event: MouseEvent) => {
        if ((event.target as Element)?.innerHTML == modal?.innerHTML) {
            changeModalDisplay("none");
        }
    }

    return (
        <div className='planets-list'>
            {planets.map((planet, index) => {
                let marginTop = '15px';

                if(index == 0){
                    marginTop = '0px';
                }

                return (
                    <React.Fragment>
                        <div className='planet-container' style={{ marginTop: marginTop }} onClick={(event) => {
                                console.log((event.target as Element).className);
                                if((event.target as Element).className != 'planet-delete-button' && (event.target as Element).className != 'fa fa-times') {
                                    changeModalDisplay('block');
                                }
                            }}>
                            <PlanetPhoto color={planet.color} screen={0}/>
                            <div className='planet-description'>
                                Nome: {planet.name}
                            </div>
                            <div className='planet-description'>
                                Galáxia: {planet.galaxy}
                            </div>
                            <div/> <div/>
                            <div className="planet-delete-button" onClick={() => {
                                console.log('delete');
                            }}>
                                <i className='fa fa-times'></i>
                            </div>
                        </div>
                        <div id="myModal" className="modal" style={{
                            display: modalDisplay
                        }}>
                            <div className="modal-window">
                                <span className="close-modal" onClick={() => {
                                    changeModalDisplay('none');
                                }}>&times;</span>
                                <span className="delete-modal" onClick={() => {
                                    changeModalDisplay('none');
                                }}>&times;</span>
                                <div className="modal-content">
                                    <div className="modal-container">
                                        <PlanetPhoto screen={1} color={planet.color} photoLink={''}/>
                                        <div className="modal-input">
                                            <label>Link imagem:</label>
                                            <input type="text" id="fname" name="fname" value="Sem link" disabled/>
                                        </div>
                                        <div className="modal-input">
                                            <label>Cor:</label>
                                            <input type="text" id="fname" name="fname" value="Verde" disabled/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="modal-container">
                                        <div className="modal-input">
                                            <label>Nome:</label>
                                            <input type="text" id="fname" name="fname" value="Plutao" disabled/>
                                        </div>
                                        <div className="modal-input">
                                            <label>Galaxia:</label>
                                            <input type="text" id="fname" name="fname" value="Via lactea" disabled/>
                                        </div>
                                        <div className="modal-input">
                                            <label>Tamanho(mi):</label>
                                            <input type="text" id="fname" name="fname" value="2.000" disabled/>
                                        </div>
                                        <div className="modal-input">
                                            <label>Idade(bilhões de anos):</label>
                                            <input type="text" id="fname" name="fname" value="4,6" disabled/>
                                        </div>
                                        <div className="modal-input">
                                            <label>Temperatura(K):</label>
                                            <input type="text" id="fname" name="fname" value="-200" disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
}