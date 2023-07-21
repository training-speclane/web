import logo from './logo.svg';
import './App.css';
import MySection from './components/MySection';

function App() {

  const todaysDate =  () => {

    const date =  new Date();
    const yr = date.getFullYear;
    const mm =  date.getMonth+1;
    const dd =  date.getDate;

    return yr + "/" + mm + "/"+dd;

  }


  return (
    <div className="App">
    
      <MySection firstName = "John Doe"  todaysDate = { todaysDate()} /> 
     
    </div>
    
  );
}

export default App;
