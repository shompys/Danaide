import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlaylist } from '../../redux/playlistReducer';

function ItemPlaylist({ name, id }) {

    const dispatch = useDispatch()

    const video = {
        src: `${process.env.REACT_APP_API_VIDEO}${id}.mp4`
    }

    return(
        <div className="Item" style={{background: 'yellow', padding: '1rem'}}>

            <div>
                <span>ID: </span>
                <span> {id} </span>
            </div>
            <div>
                <span>Nombre de canal: </span>
                <span> {name} </span>
            </div>
            <video width="300" autoPlay muted>
                    <source src={video.src} type="video/mp4" />
            </video>
            <button type="button" className="" onClick= {() => dispatch(deletePlaylist(id))} ><i className="fas fa-minus-circle"></i>Eliminar de playlist</button>
            
        </div>
    )
}

export default ItemPlaylist;