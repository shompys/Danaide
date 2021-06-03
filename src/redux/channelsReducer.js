import { createSlice } from '@reduxjs/toolkit';
import { apiGetService } from '../services';

const channelsReducer = createSlice({

    name: 'channels',
    initialState: {
        channels: []
    },
    reducers: {
        getChannelsLocal : (state, action) => {

            return { ...state, channels: action.payload }
            
        }
    }

});

// requests

const { getChannelsLocal } = channelsReducer.actions;

export const getChannels = () => async dispatch => {

    try{

        const response = await apiGetService('channels');

        dispatch(getChannelsLocal(response))

    }catch(error){
        console.log('Error: ', error);
    }

}

// useSelector

export const showChannel = state => state.channelsReducer.channels

export default channelsReducer.reducer