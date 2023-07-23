import logo from './logo.svg';
import './App.css';
import MySection from './components/MySection';
import MyName from './components/MyName';
import UserInfo from './components/UserInfo';

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


     <UserInfo />
    
      {/* <MySection firstName = "John Doe"  todaysDate = {todaysDate()} /> 
      <hr/>
      <MyName firstName = "Jane Doe"  todaysDate =  {todaysDate()} /> */}
     
    </div>
    
  );
}

export default App;
