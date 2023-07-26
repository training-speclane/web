import logo from './logo.svg';
import MySection from './components/MySection';
import MyName from './components/MyName';
import UserInfo from './components/UserInfo';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';

import './App.css';

function App() {

  const todaysDate =  () => {
    const date =  new Date();
    const yr = date.getFullYear();
    const mm =  date.getMonth()+1;
    const dd =  date.getDate();
    return yr.toString() + "/" + mm.toString() + "/"+dd.toString();
  }


  return (
    <div className="App">
     <header>
       <PrimarySearchAppBar/>
     </header>
       {/* <UserInfo /> */}
    
      {/* <MySection firstName = "John Doe"  todaysDate = {todaysDate()} /> 
      <hr/>
      <MyName firstName = "Jane Doe"  todaysDate =  {todaysDate()} /> */}
     

     <div className = 'main-body'>
      <h1>Welcome to my App</h1>
     </div>

     <footer>
     
     </footer>
      
    </div>
    
  );
}

export default App;
