import React from 'react';
import Navbar from './components/layout/Navbar';
import Joke from './components/Joke';
import creepyDad from'./components/creepyDad.png';
import dad from './components/dad.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto joke-container">
     <Joke />
     <img className="creepy-dad-pic" src={creepyDad}/>
     <h1>HILARIOUS</h1>
     </div> 
    </div>
  );
}

export default App;
