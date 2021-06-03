import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getPlaylist, showPlaylist } from '../../redux/playlistReducer';
import ItemPlaylist from './ItemPlaylist';

function Playlist() {

    const playlist = useSelector(showPlaylist)

    return(
        <div>
            {
                playlist?.map( value => <ItemPlaylist key={value.id} {...value}/>)
            }
        </div>
    )
}

export default Playlist;