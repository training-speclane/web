
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';




export default function ApiUser (props) {

    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false);



    useEffect( () => {
        setLoading(true);
        const endPoint =  "http://localhost:8080/get-user-info";

        axios
        .get(endPoint)
        .then (response => {
            setUserData(response.data); 
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })

    }, [])
  

    if(loading){
    
        return "...loading"
    }


    return(
        <React.Fragment>
          <h3>User Info API from Java </h3>

          

            <Paper elevation={6}>

                <div style ={{minHeight:'400px', minWidth:'200px'}}>
                   First Name: <strong>{userData?.firstName}</strong> <br/> 
                   Last Name: <strong>{userData?.lastName}</strong> <br/> 
                   DOB: <strong>{userData?.dob}</strong> <br/> 
                   City: <strong> {userData?.city}</strong> <br/> 
                   Country:  <strong>{userData?.country}</strong> <br/> 
                   Street:  <strong>{userData?.streetName}</strong> <br/> 
                </div>
            </Paper>


        </React.Fragment>
    )


}