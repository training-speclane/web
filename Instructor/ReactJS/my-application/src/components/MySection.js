
import React from 'react';

import './MySection.css';

 function MySection (props) {

   return (
     <div>
       <p>React is one of the most popular JS lib</p>

       <form className='my-section'>
         Date of birth <input type = "date" /> <br/>
         FirstName <input type = "text" value = {props.firstName} />
       </form>
     </div>

   );
}

export default MySection;