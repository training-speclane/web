import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName';
import UserInfo from './components/UserInfo';

function App() {

  const todaysDate = () => {

    const date = new Date();
    const yr = date.getFullYear();
    const mm = date.getMonth()+1;
    const dd = date.getDate();
    
   return yr + "/" + mm + "/" + dd;
  }
  
  
  return (
    <div className="App">
        {/* <MyName FirstName ="Sonita Muluh" todaysDate = {todaysDate()}/>*/}
    <UserInfo />

    </div>
  );
}

export default App;
