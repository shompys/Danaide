import { createSlice } from '@reduxjs/toolkit';
import { apiGetService } from '../services';

const notificationReducer = createSlice({

    name: 'notification',
    initialState: {
        notification: []
    },
    reducers: {
        getNotificationLocal: (state, action) => {

            if (action.payload.length) return { ...state, notification: action.payload }
             
        }
    }

});

// requests

const { getNotificationLocal } = notificationReducer.actions;

export const getNotification = () => async dispatch => {

    try{

        const response = await apiGetService('event');
        
        dispatch(getNotificationLocal(response))

    }catch(error){
        console.log('Error: ', error);
    }

}
export const refreshNotification = () => async dispatch => {

    setInterval(() => {
        dispatch(getNotification())
    },1000)

}
// useSelector

export const showNotification = state => state.notificationReducer.notification
export const showacumNotification = state => state.notificationReducer.acumNotification

export default notificationReducer.reducer