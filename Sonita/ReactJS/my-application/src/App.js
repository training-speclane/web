import logo from './logo.svg';
import MyName from './components/MyName';
import UserInfo from './components/UserInfo';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ApiUser from './components/ApiUser';
import './App.css';


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
     <header>
      <PrimarySearchAppBar/>
     </header>
        {/* <MyName FirstName ="Sonita Muluh" todaysDate = {todaysDate()}/>*/}
      { /*<UserInfo />*/}


    <div className = 'main-body'>
    <h1>Welcome to my App</h1>
    

      <ApiUser/>




    </div>

    <footer>
        
    </footer>

    
    </div>
  );
}

export default App;
