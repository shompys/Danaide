import React from 'react';
import {Link} from 'react-router-dom';
import jss from '../../jss';


function Navbar(){

    return(
        <nav className={classes.content}>

            <Link className={`${classes.home} ${classes.item}`} to="/"><i className="fas fa-home"></i></Link>

            <Link className={`${classes.playlist} ${classes.item}`} to="/dashboard"><i className="fas fa-th-list"></i></Link>

            <Link className={`${classes.notification} ${classes.item}`} to="/logs"><i className="fas fa-bell"></i></Link>
            
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
    }
    // item: {
        
    //     height: '100%'
    // }

}

const { classes } = jss.createStyleSheet(styles).attach();

export default Navbar;