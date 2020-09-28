import React, { useState } from 'react';
import PlanetModal from '../PlanetModal';
import PlanetPhoto from '../PlanetPhoto';
import './styles.css';

export interface PlanetProps {
    _id: string,
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
    const [modalDisplay, changeModalDisplay] = useState('none');
    
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
                </div> <div/> <div/>
                <div className="planet-delete-button" onClick={() => {
                    console.log('delete');
                }}>
                    <i className='fa fa-times'></i>
                </div>
            </div>

            <PlanetModal display={modalDisplay} planet={planet} onClose={() => changeModalDisplay('none')} onDelete={() => changeModalDisplay('none')}/>
        </React.Fragment>
    );
}

export default PlanetContainer;