import React from 'react';
import Notification from '../components/Notification';
import Layaout from '../layout/Layaout';

function Logs () {

    return(
        <Layaout>
            <h1>Último evento detectado</h1>
            <Notification/>
        </Layaout>
    )

}

export default Logs;