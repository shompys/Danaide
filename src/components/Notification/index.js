import React from 'react';
import { useSelector } from 'react-redux';
import { showNotification } from '../../redux/notificationReducer';
import jss from '../../jss';

function Notification(){

    const notification = useSelector(showNotification);
    
    return(
        <div className={classes.content}>
        
            {
                notification?.map(({text, type, id}, index) => {

                    return(
                        <div key={index} className={classes.contentItem}>
                            <div>
                                <span>Tipo de evento: </span>
                                <span>{type}</span>
                            </div>
                            <div>
                                <span>Descripción: </span>
                                <span>{text}</span>
                            </div>
                            <img className= {classes.img} src={`${process.env.REACT_APP_API_IMAGE}${id}`} alt="notification" />
                        </div>
                        )

                })
            }
        </div>
    )
}

const styles = {
    content: {
        display: 'grid'
    },
    contentItem: {
        margin: '.5rem',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0 0 4px 1px var(--color-border)'
    },
    img: {
        width: '2rem'
        
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

export default Notification;