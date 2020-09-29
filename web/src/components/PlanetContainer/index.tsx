import React, { useState } from 'react';
import api from '../../services/api';
import PlanetModal from '../PlanetModal';
import PlanetPhoto from '../PlanetPhoto';
import './styles.css';
import { useHistory } from 'react-router-dom';

export interface PlanetProps {
    id: number,
    name: string,
    color: string,
    galaxy: string,
    size: number,
    age: number,
    temperature: number,
}

interface PlanetContainer {
    planet: PlanetProps,
    index: number
}

const PlanetContainer: React.FC<PlanetContainer> = ({
    planet,
    index
}) => {

    const initialPlanet: PlanetProps = {
        id: 0,
        name: '',
        color: '',
        galaxy: '',
        size: 0,
        age: 0,
        temperature: 0,
    };
    const [ modalPlanet, setModalPlanet ] = useState(initialPlanet);

    const [modalDisplay, changeModalDisplay] = useState('none');
    const history = useHistory();
    
    const modal = document.getElementById("myModal");
                            
    window.onclick = (event: MouseEvent) => {
        if ((event.target as Element)?.innerHTML == modal?.innerHTML) {
            changeModalDisplay("none");
        }
    }

    let marginTop = '15px';

    if(index == 0){
        marginTop = '0px';
    }

    //API
    async function deletePlanet(){
        const res = await api.put('/deletePlanet', {
            id: planet.id
        });

        history.go(0);
    }

    async function getPlanet(){
        await api.get('/planet' + planet.id).then(response => {
            const apiPlanet = response.data;
    
            setModalPlanet(apiPlanet);
        });
    } 

    return (
        <React.Fragment>
            <div className='planet-container' style={{ marginTop: marginTop }} onClick={(event) => {
                    if((event.target as Element).className != 'planet-delete-button' && (event.target as Element).className != 'fa fa-times') {
                        changeModalDisplay('block');
                    }

                    getPlanet();
                }}>
                <PlanetPhoto color={planet.color} screen={0}/>
                <div className='planet-description'>
                    Nome: {planet.name}
                </div>
                <div className='planet-description'>
                    Galáxia: {planet.galaxy}
                </div> <div/> <div/>
                <div className="planet-delete-button" onClick={deletePlanet}>
                    <i className='fa fa-times'></i>
                </div>
            </div>

            <PlanetModal display={modalDisplay} planet={modalPlanet as PlanetProps} onClose={() => changeModalDisplay('none')}/>
        </React.Fragment>
    );
}

export default PlanetContainer;