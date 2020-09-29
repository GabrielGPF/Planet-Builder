import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { PlanetProps } from '../PlanetContainer';
import PlanetPhoto from '../PlanetPhoto';
import './styles.css';

interface PlanetModalProps {
    display: string,
    planet: PlanetProps,
    onClose: any,
}

const PlanetModal: React.FC<PlanetModalProps> = ({
    display,
    planet,
    onClose,
}) => {
    return (
        <div id="myModal" className="modal" style={{
            display: display
        }}>
            <div className="modal-window">
                <span className="close-modal" onClick={onClose}>&times;</span>
                <div className="modal-content">
                    <div className="modal-container">
                        <PlanetPhoto screen={1} color={planet.color} />
                        <div className="modal-input">
                            <label>Cor:</label>
                            <input type="color" id="fname" name="fname" value={planet.color} disabled/>
                        </div>
                        <div className="modal-input">
                            <label>Nome:</label>
                            <input type="text" id="fname" name="fname" value={planet.name} disabled/>
                        </div>
                    </div>
                    <hr/>
                    <div className="modal-container">
                        <div className="modal-input">
                            <label>Galáxia:</label>
                            <input type="text" id="fname" name="fname" value={planet.galaxy} disabled/>
                        </div>
                        <div className="modal-input">
                            <label>Tamanho(mi):</label>
                            <input type="number" id="fname" name="fname" value={planet.size} disabled/>
                        </div>
                        <div className="modal-input">
                            <label>Idade(bilhões de anos):</label>
                            <input type="number" id="fname" name="fname" value={planet.age} disabled/>
                        </div>
                        <div className="modal-input">
                            <label>Temperatura(K):</label>
                            <input type="number" id="fname" name="fname" value={planet.temperature} disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetModal;