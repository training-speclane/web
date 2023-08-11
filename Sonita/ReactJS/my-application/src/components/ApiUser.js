import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function ApiUser(props){

    const [userData, setUserData]= useState();
    const [loading, setLoading]= useState();

    
    useEffect( () => {

        const endPoint = "http://localhost:8080/get-user-info";
    
        axios
        .get(endPoint)
        .then(response => {
            setUserData(response.data);
            setLoading(false)
        })
        .catch(error => {
            console.error(error);
            setLoading(false)
        })
    }, [] )

    if (loading){

        return "...loading"
    }

    return(
        <React.Fragment>
            <h3>User Info from Java </h3>
            <Paper elevation={6}>
              
              <div style ={{minHeight: '400px', minWidth:'200px'}}>
                
                    First Name:<strong>{userData?.firstName}</strong> <br/>
                    Last Name: <strong>{userData?.lastName}</strong>  <br/>
                    DOB Name: <strong>{userData?.dod}</strong>        <br/>
                    City Name:<strong> {userData?.city} </strong>     <br/>
                    Country Name:<strong>{userData?.country} </strong>  <br/>
                    Streets:  <strong>{userData?.streetName}</strong>   <br/>



                
                
                
                </div>  
                
                
                </Paper>

        </React.Fragment>
    )
}