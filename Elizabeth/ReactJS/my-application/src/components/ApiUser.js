
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

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const EMAIL_REGEX =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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



  const handleFirstNameChange  = val => {
      setFirstName(val );
      if(val.length < 3 || val.length > 45 ) { //if length is less than 3 xters, 
        // show error on the first name field
         setFirstNameError("First name must be between 3 and 45 characters");
      }else{
         setFirstNameError("");
      }
  }

  
  const handleLastNameChange  = val => {
    setLastName(val);
    if(val.length < 3 || val.length > 45) { //if length is less than 3 xters, 
      // show error on the first name field
       setLastNameError("Last name must be between  3 and 45 Characters");
    }else{
       setLastNameError("");
    }
}


const handlEmailChange  = val => {
  setEmail(val);
    if(val.length < 3) { //if length is less than 3 xters, 
      // show error on the first name field
       setEmailError("Email must be at least 3 Characters");
    }else if(!EMAIL_REGEX.test(val) ) {
        setEmailError("Email not valid. must contain at least a @ and a period ");
    }
    
    else{
        setEmailError("");
    }
}


    return(
        <React.Fragment>

            <Paper elevation={6}>

                <div style ={{minHeight:'400px', minWidth:'200px'}}>
                <h3>Enter your information below</h3>
                { userSaved ? successMessage() : null}

                   <div style = {{padding : "10px", maxWidth: '50%'}}>
                        <Stack direction="column" spacing={3}>
                                <TextField 
                                    error = {!!firstNameError}
                                    onChange={(event) =>  handleFirstNameChange(event.target.value)}  
                                    label="First Name" 
                                    variant="outlined"
                                    helperText = {firstNameError}
                                 />
                                <TextField  
                                    error = {!!lastNameError}
                                    onChange={(event) =>  handleLastNameChange(event.target.value)}  
                                    label="Last Name" 
                                    variant="outlined"
                                    helperText = {lastNameError}
                                 />
                                <TextField 
                                    error = {!!emailError} 
                                    onChange={(event) =>  handlEmailChange(event.target.value)} 
                                    type="email"  
                                    label="Email" 
                                    variant="outlined" 
                                    helperText = {emailError}
                                />
                                <TextField 
                                    onChange={(event) =>  setDob(event.target.value)} 
                                    type = "date"   
                                    label="" 
                                    variant="outlined" 
                                 />
                                <TextField  
                                    onChange={(event) =>  setStreet(event.target.value)} 
                                    label="Street" 
                                    variant="outlined" 
                                />
                                <TextField  
                                    onChange={(event) =>  setCity(event.target.value)} 
                                    label="City" 
                                    variant="outlined" 
                                />
                                <TextField 
                                    onChange={(event) =>  setCountry(event.target.value)} 
                                    label="Country" 
                                    variant="outlined" 
                                 />

                                <Button onClick={() => handleFormSubmit()} variant="contained" color="success"> Submit</Button>
                        </Stack>
                    </div>
                </div>



            </Paper>


        </React.Fragment>
    )


}