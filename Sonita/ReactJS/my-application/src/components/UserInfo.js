import {useState, React} from 'react';


export default function UserInfo (props){
    const [showUserSection, setShowUserSection]= useState(false); //useState = HOOK
    const [numTimesClicked, setNumTimesClicked]=useState(0) // const numTimesClicked = 0(initial value)


    const updateStateVariables = ()=> {
        setShowUserSection(!showUserSection);
        setNumTimesClicked(numTimesClicked +1)
        

    }


    return(
        <div>
            <h3>Click the bottom below to show/hid info area</h3>
           

        <div>
            <button onClick={()=>updateStateVariables() }>{showUserSection === true? 'Hide': 'Show'}</button>
            <div>This button has been clicked <strong>{numTimesClicked}</strong> </div>
        </div>
            <hr/>

        { showUserSection === true  ?
            <div style={{minWidth: '60', minHeight: '30vh', backgroundColor: 'green', color: 'white' }}>
            first name: <br/>
            last name:
        </div>
        :
        null
        }
        
        </div>
    )
}