import React from 'react';

const Event = ({event}) => {
    const deleteEvent = id => {
        console.log(id)
        fetch(`https://volunteernetwork01.herokuapp.com/deleteEvent/${id}`, {
            method: "DELETE"
        })
        .then(res => console.log(res))
    };
    return (
        <div className="col-md-3 mb-2">
            {/* <img style={{height: '300px'}} src={require(`../../images/${event.image}`)} alt={event.name}/> */}
            <img style={{height: '300px'}} src={event.imageUrl} alt={event.name}/>
            <h3>{event.name}</h3>
            <button onClick={()=>deleteEvent(event._id)} type="button" className="btn btn-danger">Delete</button>  
        </div>
    );
};

export default Event;