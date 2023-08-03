
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Button, formControlClasses } from '@mui/material';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';




export default function ApiUser (props) {

    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [userSaved, setUserSaved] = useState(false);

    

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



    const handleFormSubmit = () => {

         let formFields = {};

         formFields.firstName =  firstName;
         formFields.lastName =  lastName;
         formFields.dob = dob;
         formFields.email = email;
         formFields.streetName = street;
         formFields.city = city;
         formFields.country = country


         console.log(formFields);

         setLoading(true);
         const endPoint =  "http://localhost:8080/save-user";
 
         axios
         .post(endPoint, formFields)
         .then (response => {
             setUserSaved(true);
             setLoading(false);
             console.log(response);
         })
         .catch(error => {
             console.error(error);
             setLoading(false);
         })

    }


  const successMessage  = () => {

    return(
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
             User info saved succesfully — <strong>You can now close the screen!</strong>
        </Alert>
    )
  }


    return(
        <React.Fragment>
          {/* <h3>User Info API from Java </h3> */}

          

            <Paper elevation={6}>
{/* 
                <div style ={{minHeight:'400px', minWidth:'200px'}}>
                   First Name: <strong>{userData?.firstName}</strong> <br/> 
                   Last Name: <strong>{userData?.lastName}</strong> <br/> 
                   DOB: <strong>{userData?.dob}</strong> <br/> 
                   City: <strong> {userData?.city}</strong> <br/> 
                   Country:  <strong>{userData?.country}</strong> <br/> 
                   Street:  <strong>{userData?.streetName}</strong> <br/> 
                   Email:  <strong>{userData?.email}</strong> <br/> 
                </div> */}

                <div style ={{minHeight:'400px', minWidth:'200px'}}>
                <h3>Enter your information below</h3>
                { userSaved ? successMessage() : null}

                   <div style = {{padding : "10px", maxWidth: '50%'}}>
                        <Stack direction="column" spacing={3}>
                                <TextField  onChange={(event) =>  setFirstName(event.target.value)}  label="First Name" variant="outlined" />
                                <TextField  onChange={(event) =>  setLastName(event.target.value)}  label="Last Name" variant="outlined" />
                                <TextField  onChange={(event) =>  setEmail(event.target.value)} type="email"  label="Email" variant="outlined" />
                                <TextField  onChange={(event) =>  setDob(event.target.value)} type = "date"   label="" variant="outlined" />
                                <TextField  onChange={(event) =>  setStreet(event.target.value)} label="Street" variant="outlined" />
                                <TextField  onChange={(event) =>  setCity(event.target.value)} label="City" variant="outlined" />
                                <TextField  onChange={(event) =>  setCountry(event.target.value)} label="Country" variant="outlined" />

                                <Button onClick={() => handleFormSubmit()} variant="contained" color="success"> Submit</Button>
                        </Stack>
                    </div>
                </div>



            </Paper>


        </React.Fragment>
    )


}