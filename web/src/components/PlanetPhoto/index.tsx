import React from 'react';
import './styles.css';
import planetPng from '../../assets/images/planet.png';

enum PlanetPhotoScreen {
    planets,
    planetModal,
    planetForm
}

interface PlanetPhotoProps {
    color?: string,
    photoLink?: string,
    screen: PlanetPhotoScreen
}

const PlanetPhoto: React.FC<PlanetPhotoProps> = ({
    color,
    photoLink,
    screen
}) => {
    if(photoLink){
        return (
            <div className={'planet-photo-' + screen}>
                <img className={'planet-' + screen} src={photoLink} alt='Planet'/>
            </div>
        );
    }

    return (
        <div className={'planet-photo-' + screen}>
            <img className={'planet-' + screen} src={planetPng} alt='Planet'/>
            <div className={'filter-' + screen} style={{ backgroundColor: color }}/>
        </div>
    );
}

export default PlanetPhoto;