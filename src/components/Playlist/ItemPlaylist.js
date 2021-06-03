import React from 'react';

function ItemPlaylist({ name, id }) {
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
            
        </div>
    )
}

export default ItemPlaylist;