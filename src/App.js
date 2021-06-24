// import {getCount} from './javascript/deaths';
import { useState, useEffect } from 'react';
import Linechart from './Components/Linechart';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import './App.css';

function App() {

  const [selectedBooks, setSelectedBooks] = useState([0, 24]);
  const [sliderValues, setSliderValues] = useState([1, 24]);
  const setChartRange = () => {
    setSelectedBooks([4, 15]);
  }

  useEffect(() => {
    setSelectedBooks(sliderValues);
  }, [sliderValues])

  const handleSliderChange = (sliderValues) => {setSliderValues(sliderValues)}

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
      <h1 className="title">An interactive display of death in the Iliad</h1>
      <button onClick={setChartRange}>Click Me</button>
      <Range className="book-range" min={1} max={24} defaultValue={sliderValues} marks={{24: {label: "24"}, 12: {label: "12"}, 1: {label: "1"}}} onChange={handleSliderChange} />
      <div className='chart-container'>
        {/* {getCount("Wound_Location", "Back")} */}
        <Linechart className='death-chart' selectedBooks={selectedBooks}/>
      </div>
    </div>
  );
}

export default App;
