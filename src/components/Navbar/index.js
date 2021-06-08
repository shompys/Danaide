import React from 'react';
import {Link} from 'react-router-dom';
import jss from '../../jss';
import {showNotification} from '../../redux/notificationReducer';
import { useSelector } from 'react-redux';

function Navbar(){
    
    const notification = useSelector(showNotification)

    const [isNotification, setIsNotification] = React.useState(false)
    const [currentNotification, setCurrentNotification] = React.useState(false)
    
    const handleEventNotification = () => {
        
        setCurrentNotification(notification)
       
        if(currentNotification) {
            
            setIsNotification(true)
            setCurrentNotification(false)
        }

    }
    
    React.useEffect(() => {
        
        handleEventNotification();
        
    },[notification])
    
    return(
        <nav className={classes.content}>
            
            <Link className={`${classes.home} ${classes.item}`} to="/">
                <i className="fas fa-home"></i>
            </Link>

            <Link className={`${classes.playlist} ${classes.item}`} to="/dashboard">
                <i className="fas fa-th-list"></i>
            </Link>
            
            <div className={classes.contentNotification} onClick={() => setIsNotification(false)}>
            
            
                {isNotification && <span className={classes.alert} ></span>}
                
                <Link className={`${classes.item}`} to='/logs'>
                    <i className="fas fa-bell"></i>
                </Link>
            </div>
            
        </nav>
    )

}

const styles = {

    content: {
        backgroundColor: 'var(--color-primary)',
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '4rem'
    },
    item: {
        padding: '.3rem',
        color: '#fff',
        fontSize: '1.6rem'
    },
    contentNotification: {
        position: 'relative'
    },
    alert: {
        position: 'absolute',
        padding: '.3rem',
        bottom: '0',
        borderRadius: '50%',
        
        backgroundColor:'var(--color-danger)'
    }

}

const { classes } = jss.createStyleSheet(styles).attach();

export default Navbar;