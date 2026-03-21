import './App.css'
import Accordian from './components/accordian';
import RandomColour from './components/randomColour';
import StarRating from './components/starRating'; 

function App() {
  return (
  <div className="App"> 
  {/* Accordian Component*/}
  {/* <Accordian/> */}

  {/* Random Color Component */}
  {/*<RandomColour/> */}
    

  {/* Star Rating Component */}
  <StarRating noOfStars={10}/>
  </div>

  );
}

export default App;
