import { createSlice } from '@reduxjs/toolkit';
import { apiGetService, apiPostService, apiDeleteService } from '../services';

const playlistReducer = createSlice({

    name:'playlist',
    initialState : {

        playlist : []

    },
    reducers: {
        getPlaylistLocal: (state, action) => {

            return { ...state, playlist: action.payload }

        },
        postPlaylistLocal: (state, action) => {
          
            return { ...state, playlist: action.payload }

        },
        deletePlaylistLocal : (state, action) => {
            
            return { ...state, playlist: action.payload }

        }
    }

})

// request

const { getPlaylistLocal, postPlaylistLocal, deletePlaylistLocal } = playlistReducer.actions;

export const getPlaylist = () => async dispatch => {

    try{

        const response = await apiGetService('playlist');

        dispatch(getPlaylistLocal(response));

    }catch(error){

        console.log('Error: ', error);

    }

}

export const postPlaylist = payload => async dispatch => {

    try{

        const response = await apiPostService('playlist/add');

        dispatch(postPlaylistLocal(response));
    
    }catch(error){

        console.log('Error: '. error);

    }

}

export const deletePlaylist = id => async dispatch => {

    try{

    }catch(error){

        console.log('Error: ', error);

    }

}

// useSelector

export const showPlaylist = state => state.playlistReducer.playlist

export default playlistReducer.reducer