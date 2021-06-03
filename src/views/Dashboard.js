import React from 'react';
import Layaout from '../layout/Layaout';
import Playlist from '../components/Playlist';

function Dashboard() {
    return(
        <Layaout>
            <h1>Listado de mi playlist</h1>
            <Playlist/>

        </Layaout>
            
    )
}

export default Dashboard;