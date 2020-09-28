import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import Input from '../../components/Input';
import PlanetPhoto from '../../components/PlanetPhoto';
import './styles.css';

const PlanetForm = () => {
    const [color, setColor] = useState('#ffffff');
    const [link, setLink] = useState('');

    let history = useHistory();

    function handleGoBack() {
        history.goBack();
    }

    function checkURL(url: string) {
        console.log(url);
setLink(url);
        // try {
        //     window.atob(url);
        //     setLink(url);

        //     console.log('bruh');
            
        // }catch (e){
        //     if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        //         console.log('moment');
        //         ;
        //     }
        // }
    }
    
    return (
        <div id='planet-form'>
            <Background/>
            <div className="planet-form-sheet">
                <div className="first-column">
                    <div className="photo">
                        <PlanetPhoto screen={2} color={color}/>
                    </div>
                    <Input label='Cor do planeta:' name='planetColor' type="color" defaultValue={color} onChange={(e) => setColor(e.currentTarget.value)}/>
                    <Input label='Nome:' name='imageLink' type="text"/>
                    <Input label='Galáxia:' name='galaxy' type="text"/>
                    <div/>
                </div>
                <hr/>
                <div className="first-column">
                    <span className='user-back-button' onClick={handleGoBack}><i className='fa fa-times'></i></span>
                    <Input label='Tamanho(mi):' name='size' type="number"/>
                    <Input label='Idade(bilhões de anos):' name='age' type="number"/>
                    <Input label='Temperatura(K):' name='temperature' type="number"/>
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}

export default PlanetForm;