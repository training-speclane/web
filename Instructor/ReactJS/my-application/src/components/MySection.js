
import React from 'react';

import './MySection.css';

 function MySection (props) {

   return (
     <div>
       <p>React is one of the most popular JS lib</p>

       <form className='my-section'>
         Date of birth <input type = "date" style={{height:'30px', minWidth: '50px', border : 'solid 1px green'}} /> <br/>
         FirstName <input type = "text" value = {props.firstName}  style={{height:'30px', minWidth: '50px', border : 'solid 1px green'}} />
       </form>
     </div>

   );
}

export default MySection;