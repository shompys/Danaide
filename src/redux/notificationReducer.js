import { createSlice } from '@reduxjs/toolkit';
import { apiGetService } from '../services';

const notificationReducer = createSlice({

    name: 'notification',
    initialState: {
        notification: null
    },
    reducers: {
        getNotificationLocal: (state, action) => {
            
            if (action.payload.length) {

                state.notification = action.payload[0]

            }
             
        }
    }

});

// requests

const { getNotificationLocal } = notificationReducer.actions;

// export const getNotification = () => async dispatch => {

    

// }
export const refreshNotification = () => async dispatch => {

    setInterval(async () => {
        try{

            const response = await apiGetService('event');
            
            dispatch(getNotificationLocal(response))
    
        }catch(error){
            console.log('Error: ', error);
        }
    },1000)

}
// useSelector

export const showNotification = state => state.notificationReducer.notification
export const showacumNotification = state => state.notificationReducer.acumNotification

export default notificationReducer.reducer