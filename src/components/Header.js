import React from 'react';
import Navbar from './Navbar';
import jss from '../jss';

function Header(){
    return(
        <header className={classes.content}>
            
            <Navbar/>
            
        </header>
    )
}
const styles = {
    content: {
        
        
    }
}

const { classes } = jss.createStyleSheet(styles).attach();
export default Header;