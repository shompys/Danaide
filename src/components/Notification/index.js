import React from 'react';
import { useSelector } from 'react-redux';
import { showNotification } from '../../redux/notificationReducer';
import jss from '../../jss';

function Notification(){

    const notification = useSelector(showNotification);
    
    return(
        <div className={classes.content}>
        
            {
                notification?.map(({text, type, id}) => {

                    return(
                        <div key={id} >
                            <div>
                                <span>Tipo de evento:</span>
                                <span>{type}</span>
                            </div>
                            
                            <img className= {classes.img} src={`${process.env.REACT_APP_API_IMAGE}${id}`} alt="notification" />
                            <div>
                                <span>{text}</span>
                            </div>
                        </div>
                        )

                })
            }
        </div>
    )
}

const styles = {
    // content: {
    //     position: 'absolute',
    //     right: '0',
    //     top: '0',
    // },
    bell: {
        position: 'relative',
        
    },
    img: {
        width: '.7rem',
        borderRadius: '50%',
        
        
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

export default Notification;