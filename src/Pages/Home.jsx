import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios';

const Home = () => {
    const HomePage = () => {

        const[data, setdata] = useState([]);
        

        useEffect(() =>{
            axios.get('https://api.publicapis.org/entries')
            then(response =>{
                setdata(response.data);
            });
        },[])
    }

    return (
        <h1> This is a Home Page :)</h1>      
    )
    
};

export default Home;