import React from 'react';

import { addPlaylist, deletePlaylist } from '../../redux/playlistReducer';
import {useDispatch} from 'react-redux';


function ItemChannels({id, name}) {

    const dispatch = useDispatch();


    return(

        <div className="Item" style={{background: 'green', padding: '1rem'}}>

            <div>
                <span>ID: </span>
                <span> {id} </span>
            </div>
            <div>
                <span>Nombre de canal: </span>
                <span> {name} </span>
            </div>
            <div>
                <button type="button" className="" onClick = {() => dispatch(addPlaylist(id))} ><i className="fas fa-plus-circle"></i>agregar a playlist</button>
                <button type="button" className="" onClick= {() => dispatch(deletePlaylist(id))} ><i className="fas fa-minus-circle"></i>Eliminar de playlist</button>
            </div>
        </div>

    )
}

export default ItemChannels;