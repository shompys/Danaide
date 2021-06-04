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
    }

}
const {classes} = jss.createStyleSheet(styles).attach();

export default Channels;