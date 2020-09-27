import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import PlanetForm from './pages/PlanetForm';
import Planets from './pages/Planets';
import UserForm from './pages/UserForm';

function Routes (){
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/newPlanet' component={PlanetForm}/>
            <Route path='/planets' component={Planets}/>
            <Route path='/newUser' component={UserForm}/>
        </BrowserRouter>
    );
}

export default Routes;