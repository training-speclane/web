import React from 'react';


export default function MyName(props){

    return (
        <div>
            <p>React is one of the most popular JS lib </p>

           { /*<form>
                Date of birth <input type = "date" value = {props.todaysDate}/> <br/>
                FirstName <input type = "text" value = {props.firstName} />
    </form>*/}

    My name: {props.FirstName} <br/>
    Date: {props.todaysDate}
        </div>
    )
}