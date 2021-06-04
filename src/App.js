import React from 'react';
import AppRouter from './routes/AppRouter';
import { useDispatch } from 'react-redux';
import { getChannels } from './redux/channelsReducer';
import { getPlaylist } from './redux/playlistReducer';
import { refreshNotification } from './redux/notificationReducer';
import './global.css';

function App() {
  
  const dispatch = useDispatch();

  React.useEffect(() => {

    dispatch(refreshNotification())
    dispatch(getChannels())
    dispatch(getPlaylist())
    
  },[dispatch])

  return (
    <div className="global">
      <AppRouter/>
    </div>
  );
}

export default App;
