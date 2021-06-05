import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jss from '../jss';

function Layaout({ children }){
    
    return(<>
        <Header />
        <div className={classes.contentBody}>
            {children}
        </div>
        <Footer />
    </>)
}
const styles = {
    contentBody: {
        minHeight: 'calc(100vh - 64px - 175px)'
    },
    '@media screen and (min-width: 282px)': {
        contentBody: {
            minHeight: 'calc(100vh - 64px - 156px)'
        }
    },
    '@media screen and (min-width: 768px)': {
        contentBody: {
            minHeight: 'calc(100vh - 64px - 198px)'
        }
    }
}

const { classes } = jss.createStyleSheet(styles).attach(); 
export default Layaout;