import React from 'react';
import { useSelector } from 'react-redux';
import { showPlaylist } from '../../redux/playlistReducer';
import ItemPlaylist from './ItemPlaylist';
import jss from '../../jss';

function Playlist() {

    const playlist = useSelector(showPlaylist)

    return(
        <div className={classes.content}>
            {
                playlist?.map( value => <ItemPlaylist key={value.id} {...value}/>)
            }
        </div>
    )
}
const styles = {

    content: {
        display:'grid'
    }

}
const {classes} = jss.createStyleSheet(styles).attach();

export default Playlist;