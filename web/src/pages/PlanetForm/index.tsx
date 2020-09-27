import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import Input from '../../components/Input';
import './styles.css';

const PlanetForm = () => {
    let history = useHistory();

    function handleGoBack() {
        history.goBack();
    }
    
    return (
        <div id='planet-form'>
            <Background/>
            <div className="planet-form-sheet">
                <div className="first-column">
                    <div className="photo"/>
                    <Input label='Link da Imagem' name='imageLink' type="text"/>
                    <Input label='Cor do planeta' name='planetColor' type="text"/>
                </div>
                <hr/>
                <div className="first-column">
                    <Input label='Nome' name='imageLink' type="text"/>
                    <Input label='Galáxia' name='galaxy' type="text"/>
                    <Input label='Tamanho' name='size' type="text"/>
                </div>
                <hr/>
                <div className="first-column">
                    <span className='user-back-button' onClick={handleGoBack}><i className='fa fa-times'></i></span>
                    <Input label='Idade' name='age' type="text"/>
                    <Input label='Temperatura' name='temperature' type="text"/>
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}

export default PlanetForm;