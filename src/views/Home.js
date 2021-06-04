import React from 'react';
import Channels from '../components/Channels';
import Layaout from '../layout/Layaout';

function Home (){

    return(
        <div className="Home__container">

            <Layaout>

                <h1>Listado de todos los canales</h1>
                <p>Central de todas las camaras existentes</p>
                
                <Channels/>
            </Layaout>

        </div>
    )
}
export default Home;