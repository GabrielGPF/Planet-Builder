import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Background from '../../components/Background';
import Input from '../../components/Input';
import { PlanetProps } from '../../components/PlanetContainer';
import PlanetPhoto from '../../components/PlanetPhoto';
import api from '../../services/api';
import './styles.css';

const PlanetForm = () => {
    const [color, setColor] = useState('#ffffff');
    const [link, setLink] = useState('');

    const history = useHistory();
    const { register, control, handleSubmit, errors } = useForm<PlanetProps>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            name: '',
            color,
            galaxy: '',
            age: 0,
            size: 0,
            temperature: 0
        },
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,
    });

    function handleGoBack() {
        history.goBack();
    }

    async function createPlanet(data:PlanetProps){
        await api.post('/newPlanet', data).then(() => {
            history.goBack();
        });
    }

    const onSubmit = (data: PlanetProps) => {
        createPlanet(data);
    };
    
    return (
        <div id='planet-form'>
            <Background/>
            <form className="planet-form-sheet" id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="first-column">
                    <div className="photo">
                        <PlanetPhoto screen={2} color={color}/>
                    </div>
                    <Controller name='color' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='Cor do planeta:' type="color" value={value} onBlur={onBlur} name={name}
                            onChange={(e) => {
                                onChange(e);
                                setColor(e.currentTarget.value);
                            }}
                        />
                    }}/>
                    <Controller name='name' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='Nome:' error={errors.name && errors.name.type === "required"} onChange={onChange} onBlur={onBlur} value={value} name={name} type="text"/>
                    }}/>
                    <Controller name='galaxy' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='Galáxia:' error={errors.galaxy && errors.galaxy.type === "required"} onChange={onChange} onBlur={onBlur} value={value} name={name} type="text"/>
                    }}/>
                    <div/>
                </div>
                <hr/>
                <div className="first-column">
                    <span className='user-back-button' onClick={handleGoBack}><i className='fa fa-times'></i></span>
                    <Controller name='size' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='Tamanho(mi):' onChange={onChange} onBlur={onBlur} value={value} name={name} type="number"/>
                    }}/>
                    <Controller name='age' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='Idade(bilhões de anos):' onChange={onChange} onBlur={onBlur} value={value} name={name} type="number"/>
                    }}/>
                    <Controller name='temperature' control={control} rules={{required: true}} render={({ onChange, onBlur, value, name }) => {
                        return <Input label='Temperatura(K):' onChange={onChange} onBlur={onBlur} value={value} name={name} type="number"/>
                    }}/>
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default PlanetForm;