import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from './channelsReducer';
import playlistReducer from './playlistReducer';
import notificationReducer from './notificationReducer';


export default configureStore({

    reducer: {
        channelsReducer,
        playlistReducer,
        notificationReducer
    },
})