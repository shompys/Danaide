import React from 'react';
import jss from '../../jss';
import { addPlaylist, deletePlaylist, showPlaylist} from '../../redux/playlistReducer';
import { useDispatch, useSelector } from 'react-redux';

function ItemChannels({ id, name }) {

    const [isAdded, setIsAdded] = React.useState(false);
    const dispatch = useDispatch();
    const playlist = useSelector(showPlaylist);
    
    const video = {
        src: `${process.env.REACT_APP_API_VIDEO}${id}.mp4`
    }

    const handleAdded = () => {

        const res = playlist.find((value) => value.id === id )
        
        if(!res) {
            dispatch(addPlaylist(id))
            setIsAdded(true)
        } 
        
    }
    const handleRemove = () => {
        
        const res = playlist.find((value) => value.id === id )

        if(res){
            dispatch(deletePlaylist(id))
            setIsAdded(false)
        }
        
    }
    React.useEffect(() => {
        const res = playlist.find((value) => value.id === id)

        if(res) setIsAdded(true)

    },[])

    return(

        <div className={classes.content}>

            <div className={classes.contentId}>
                <span>ID: </span>
                <p> {id} </p>
            </div>

            <div className={classes.contentVideo}>
                <video className={classes.video}autoPlay muted>
                        <source src={video.src} type="video/mp4" />
                </video>
            </div>

            <div className={classes.contentNameCanal}>
                <span>Nombre de canal: </span>
                <p> {name} </p>
                <div className={classes.contentButton}>
                    {
                    !isAdded
                    ?
                    <button type="button" className={`${classes.button} btn btn-success`} onClick = {() => handleAdded()} ><i className="fas fa-plus-circle"></i>agregar a playlist</button>
                    :    
                    <button type="button" className={`${classes.button} btn btn-danger`} onClick= {() => handleRemove()} ><i className="fas fa-minus-circle"></i>Eliminar de playlist</button>
                    }
                </div>
            </div>
        </div>

    )
}


const styles = {
    content:{
        margin: '.5rem',
        backgroundColor: 'var(--color-secondary)',
        display: 'grid',
        borderRadius: '.5rem'
    },
    contentId:{
        borderRadius: '.5rem .5rem 0 0',
        padding: '.5rem',
        textAlign: 'center',
        backgroundColor: 'var(--color-primary)',
        color: '#fff'
    },
    contentNameCanal: {
        textAlign: 'center',
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        padding: '1rem',
        borderRadius: '0 0 .5rem .5rem'
    },
    button: {
        width: '100%'
    },
    contentVideo: {
        height: '200px'
    },
    video: {
        width: '100%',
        height: '100%',
        objectFit: 'fill'
    },
    contentButton: {
        display: 'grid',
        gap: '.5rem',
        marginTop: '2rem'
    }
} 

const { classes } = jss.createStyleSheet(styles).attach();

export default ItemChannels;