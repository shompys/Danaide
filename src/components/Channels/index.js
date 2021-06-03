import React from 'react';
import { useSelector } from 'react-redux';
import {showChannel} from '../../redux/channelsReducer';
import ItemChannels from './ItemChannels';

function Channels() {

    const channels = useSelector(showChannel)

    return(
        <div>
            {
                channels?.map(value => <ItemChannels key={value.id} { ...value }/>)
            }
        </div>
    )
}

export default Channels;