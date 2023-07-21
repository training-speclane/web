
import React from 'react';


 function MySection (props) {

   return (
     <div>
       <p>React is one of the most popular JS lib</p>

       <form>
         Date of birth <input type = "date" /> <br/>
         FirstName <input type = "text" value = {props.firstName} />
       </form>
     </div>

   );
}

export default MySection;