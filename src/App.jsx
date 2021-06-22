import   './index.css'
import Header from './components/Header'
import Slide from './components/Slide'
import Slogo from './components/Slogo'
import Perks from './components/Perks'
import React from 'react';
import './App.css';

function App() {
  return (
     <div className="body">
      <div className="cont">
       <Header title="Learn what" titleSpan="you want today" />
       <Slide />
       <Slogo slogoHeading1="Vocab" slogoHeading2="listen to 20 new words" alt="img-description" src={logoImg} />
       <Perks />
   </div>
    </div>
  );
}

export default App;