import {Routes,Route} from 'react-router-dom'
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import React, { useReducer } from 'react';

function Main () {

    const updateTimes = (state, action) => {
        return state;;
    };

    const initializeTimes = () => {
        const availableTimes = [
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ];
        return availableTimes
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes())
    console.log(state)
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
            
                <Route path='/booking' 
                    element={<BookingPage 
                                        availableTimes={state}
                                        setAvailableTimes = {dispatch} 
                                     />}
                >
                </Route>
            </Routes>
        </main>
    );
}

export default Main