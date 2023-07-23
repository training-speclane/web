import {useState, React} from 'react';




export default function UserInfo (props) {

const [showUserSection, setShowUserSection] = useState(false); //useState =  HOOK
const [numTimesClicked, setNumTimesClicked] = useState(0) // const numTimesClicked = 0(initial value)




const updateStateVariables =  () => {

    //update showUserSection 
    setShowUserSection(!showUserSection);

    //update numTimesClicked
    setNumTimesClicked(numTimesClicked + 1);
}




return(
    <div>
        <h3>Click the button below to show/hide info area</h3>

       <div>
        <button onClick={() => updateStateVariables() }>{showUserSection === true ? 'Hide': 'Show'}</button>

        <div>This button has been clicked <strong> {numTimesClicked}</strong> times </div>
       </div>
       <hr/>

       { showUserSection === true ? 
        <div style={{minWidth: '60%', minHeight:'30vh', backgroundColor: 'green', color: 'white'}}>
                first name:   <br/>
                last name :  <br/>
        </div>
        :
        null
      }

    </div>
)

}