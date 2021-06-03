import { configureStore } from '@reduxjs/toolkit';

import channelsReducer from './channelsReducer';
import playlistReducer from './playlistReducer';


export default configureStore({

    reducer: {
        channelsReducer,
        playlistReducer
    },
})