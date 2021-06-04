import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import Home from '../views/Home';
import Logs from '../views/Logs';

function AppRouter (){

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/logs" component={Logs}/>
            </Switch>
        </Router>
    )

}

export default AppRouter