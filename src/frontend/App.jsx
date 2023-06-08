import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import nCharacter from './pages/Character';

export default function App() {
    return (
        <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/character" component={ nCharacter } />
      </Switch>
    );
  }