// import {getCount} from './javascript/deaths';
import { useState, useEffect } from 'react';
import Linechart from './Components/Linechart';
import 'rc-slider/assets/index.css';
import './App.css';

function App() {

  

  // useEffect(() => {
  //   setSelectedBooks(sliderValues);
  // }, [sliderValues])


  const format = {
    Assailant: "Name",
    Assailant_Loyalty: "Greek/Trojan",
    Victim: "Name",
    Victim_Loyalty: "Greek/Trojan",
    Outcome: "Death",
    Weapon: "Spear",
    Wound_Location: "Head",
    Explanation: "Spear in the head",
    Text_Location: "4.529"
  }


  return (
    <div className="display">
        <Linechart className='death-chart'/>
      </div>
  );
}

export default App;
