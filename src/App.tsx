import React from 'react';
import { Main, Profile, Services } from './views';
import './App.scss';
import { Router } from '@reach/router';

const App = () => (
    <Router>
        <Main path="/" />
        <Profile path="/profile"/>
        <Services path="/services"/>
    </Router>
);

export default App;
