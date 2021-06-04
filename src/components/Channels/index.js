import React from 'react';
import { useSelector } from 'react-redux';
import {showChannel} from '../../redux/channelsReducer';
import ItemChannels from './ItemChannels';
import jss from '../../jss';

function Channels() {
     
    const channels = useSelector(showChannel)

    return(
        <div className={classes.content} >
            {
                channels?.map(value => <ItemChannels key={value.id} { ...value }/>)
            }
        </div>
    )
}
const styles = {

    content: {
        display:'grid'
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

export default Channels;