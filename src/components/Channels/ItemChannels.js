import React from 'react';

import { addPlaylist, deletePlaylist } from '../../redux/playlistReducer';
import {useDispatch} from 'react-redux';


function ItemChannels({id, name}) {

    const dispatch = useDispatch();
    const video = {
        src: `${process.env.REACT_APP_API_VIDEO}${id}.mp4`
    }

    return(

        <div className="Item" style={{ padding: '1rem'}}>

            <div>
                <span>ID: </span>
                <span> {id} </span>
            </div>
            <div>
                <span>Nombre de canal: </span>
                <span> {name} </span>
            </div>
            <div>
                
                <video width="200" autoPlay muted>
                    <source src={video.src} type="video/mp4" />
                </video>
                <button type="button" className="" onClick = {() => dispatch(addPlaylist(id))} ><i className="fas fa-plus-circle"></i>agregar a playlist</button>
                <button type="button" className="" onClick= {() => dispatch(deletePlaylist(id))} ><i className="fas fa-minus-circle"></i>Eliminar de playlist</button>
            </div>
        </div>

    )
}

export default ItemChannels;