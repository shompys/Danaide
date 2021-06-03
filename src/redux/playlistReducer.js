import { createSlice } from '@reduxjs/toolkit';
import { apiGetService } from '../services';

const playlistReducer = createSlice({

    name:'playlist',
    initialState : {

        playlist : []

    },
    reducers: {
        getPlaylistLocal: (state, action) => {

            return { ...state, playlist: action.payload }

        }
    }

})

// request

const { getPlaylistLocal } = playlistReducer.actions;

export const getPlaylist = () => async dispatch => {

    try{

        const response = await apiGetService('playlist');
        
        dispatch(getPlaylistLocal(response));

    }catch(error){

        console.log('Error: ', error);

    }

}

export const addPlaylist = id => async dispatch => {

    try{

        await apiGetService(`playlist/add`, id);

        dispatch(getPlaylist())
    
    }catch(error){

        console.log('Error: ', error);

    }

}

export const deletePlaylist = id => async dispatch => {

    try{

        await apiGetService('playlist/remove', id);

        dispatch(getPlaylist())

    }catch(error){

        console.log('Error: ', error);

    }

}

// useSelector

export const showPlaylist = state => state.playlistReducer.playlist

export default playlistReducer.reducer