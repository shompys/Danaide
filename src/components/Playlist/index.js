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
            playlist.length ? 
                playlist?.map( value => <ItemPlaylist key={value.id} {...value}/>)
            : 
                <p className={classes.clear}>
                    
                    Ops la playlist se encuentra vacia

                </p>
            }
            
        </div>
    )
}
const styles = {

    content: {
        display:'grid'
    },
    clear: {
        padding: '5rem',
        justifySelf: 'center'

    },
    '@media screen and (min-width: 768px)': {
        content: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    },
    '@media screen and (min-width: 1024px)': {
        content: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        }
    },
    '@media screen and (min-width: 1440px)': {
        content: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))'
        }
    }
}
const {classes} = jss.createStyleSheet(styles).attach();

export default Playlist;