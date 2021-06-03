import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard';

import Home from '../views/Home';

function AppRouter (){

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    )

}

export default AppRouter