import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { refreshNotification, showNotification } from '../../redux/notificationReducer';
function Notification(){

    const dispatch = useDispatch();

    const notification = useSelector(showNotification);
    
    React.useEffect(() => {

        dispatch(refreshNotification())

    }, [dispatch])

    return(
        <div>
        
            {
                notification?.map(({text, type, id}) => {

                    return(
                        <div key={id} >
                            <div>
                                <span>Tipo de evento:</span>
                                <span>{type}</span>
                            </div>
                            
                            <img src={`${process.env.REACT_APP_API_IMAGE}${id}`} alt="notification" />
                            <div>
                                <span>{text}</span>
                            </div>
                        </div>
                        )

                })
            }
        </div>
    )
}

export default Notification;