import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const AddEvents = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] =useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageUrl: imageUrl
        };
        console.log(data)
        const url = `https://volunteernetwork01.herokuapp.com/addEvent`;
        fetch('https://volunteernetwork01.herokuapp.com/addEvent', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
        .then(res => {
            console.log('server site res', res)
        })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a58da14904622c7db2663f8c5fda2762');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <div>
            <h2 className="text-warning">Add Your Awesome Event</h2><br/>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="New exciting event" ref={register} /><br/>
                <input name="exampleRequired" type='file'  onChange={handleImageUpload} /> <br/>
                <h6 className="text-danger">Wait 10-15 sec for uploading image to database!</h6><br/>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddEvents;