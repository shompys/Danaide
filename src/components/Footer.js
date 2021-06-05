import React from 'react';
import jss from '../jss';

function Footer(){
    return(
        <footer className={classes.content}>

            <div className={classes.contentAuthor}>

                <span>Desarrolado por: </span>  
                <p>Molina Gomez, Jonathan Oscar</p>

            </div>
            <div className={classes.contentBusiness}>
                <span>Para empresa Danaide: </span>
                <a className={ classes.link }href="https://www.danaide.com.ar/" target="_blank" rel="noreferrer">
                    https://www.danaide.com.ar
                </a>
            </div>


        </footer>
    )
}
const styles = {
    content:{
        // borderTop: '2px solid var(--color-secondary)',
        // width: '100%',
        // position: 'fixed',
        bottom: '0',
        backgroundColor: 'var(--color-primary)',
        padding: '2rem',
        color: '#fff',
        display: 'grid',
        gap: '1rem',
        justifyContent:'center'
    },
    contentAuthor: {
        
    },
    contentBusiness: {

    },
    link: {
        display: 'block'
        
    },
    '@media screen and (min-width: 768px)': {
        content: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            padding: '5rem'
        },
        contentAuthor: {
            justifySelf: 'center'
        },
        contentBusiness: {
            justifySelf: 'center'
        }
    },
}

const { classes } = jss.createStyleSheet(styles).attach();

export default Footer;