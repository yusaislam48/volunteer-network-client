import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

// const events = [
//     {
//         id: 1,
//         name: 'Child Support',
//         image: 'childSupport.png'
//     },
//     {
//         id: 2,
//         name: 'Animal Shelter',
//         image: 'animalShelter.png'
//     },
//     {
//         id: 3,
//         name: 'Bird House',
//         image: 'birdHouse.png'
//     },
//     {
//         id: 4,
//         name: 'Good Student',
//         image: 'goodEducation.png'
//     },
//     {
//         id: 5,
//         name: 'Refuge Shelter',
//         image: 'refuseShelter.png'
//     },
// ];

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://volunteernetwork01.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, []);
  
    return (
        <div className="container">
            <div className="row">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)

                }
            </div>
        </div>
    );
};

export default Home;