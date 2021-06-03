import React from 'react';
import AppRouter from './routes/AppRouter';
import { useDispatch } from 'react-redux';
import { getChannels } from './redux/channelsReducer';
import { getPlaylist } from './redux/playlistReducer';

function App() {
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    
    dispatch(getChannels())
    dispatch(getPlaylist())
    
  },[dispatch])

  return (
    <><AppRouter/></>
  );
}

export default App;
