import React from 'react'
import {useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';
import Slider, {Range} from 'rc-slider';
import '../App.css';

// const attackData = require('../json/Iliad_Deaths.json').Attacks;

const Linechart = () => {
 
  const [dataArr, setDataArr] = useState ([{"Book": "1", "Direct_Attacks": 0}, {"Book": "2", "Direct_Attacks": 0}, {"Book": "3", "Direct_Attacks": 0}, {"Book": "4", "Direct_Attacks": 7}, {"Book": "5", "Direct_Attacks": 42}, {"Book": "6", "Direct_Attacks": 15}, {"Book": "7", "Direct_Attacks": 3}, {"Book": "8", "Direct_Attacks": 13}, {"Book": "9", "Direct_Attacks": 0}, {"Book": "10", "Direct_Attacks": 2}, {"Book": "11", "Direct_Attacks": 39}, {"Book": "12", "Direct_Attacks": 11}, {"Book": "13", "Direct_Attacks": 18}, {"Book": "14", "Direct_Attacks": 14}, {"Book": "15", "Direct_Attacks": 18}, {"Book": "16", "Direct_Attacks": 39}, {"Book": "17", "Direct_Attacks": 8}, {"Book": "18", "Direct_Attacks": 0}, {"Book": "19", "Direct_Attacks": 0}, {"Book": "20", "Direct_Attacks": 14}, {"Book": "21", "Direct_Attacks": 9}, {"Book": "22", "Direct_Attacks": 1}, {"Book": "23", "Direct_Attacks": 0}, {"Book": "24", "Direct_Attacks": 0}]);
  const [selectedBooks, setSelectedBooks] = useState([1, 24]);
  const [sliderValues, setSliderValues] = useState([1, 24]);

  const setChartRange = () => {
    setSelectedBooks(sliderValues);
  }

  const handleSliderChange = (sliderValues) => {setSliderValues(sliderValues)}

  return (
    <div>
      <h1 className="title">Deaths by Book</h1>
      <div className="book-range-form">
        <Range 
          className="book-range" 
          min={1} 
          max={24} 
          defaultValue={sliderValues}
          allowCross='false' 
          marks={{1: {label: '1'}, 2: {label: '2'}, 3: {label: '3'}, 4: {label: '4'}, 5: {label: '5'}, 6: {label: '6'}, 7: {label: '7'}, 8: {label: '8'}, 9: {label: '9'}, 10: {label: '10'}, 11: {label: '11'}, 12: {label: '12'}, 13: {label: '13'}, 14: {label: '14'}, 15: {label: '15'}, 16: {label: '16'}, 17: {label: '17'}, 18: {label: '18'}, 19: {label: '19'}, 20: {label: '20'}, 21: {label: '21'}, 22: {label: '22'}, 23: {label: '23'},  24: {label: '24'}}} 
          onChange={handleSliderChange} 
        />
        <button className="book-range-submit" onClick={setChartRange}>Submit Range</button>
      </div>
      <div className='chart-container'>
        <LineChart width={800} height={400} data={dataArr.slice(selectedBooks[0]-1, selectedBooks[1])} margin={{ top: 5, right: 20, bottom: 20, left: 0}}>
          <Line type='monotone' dataKey='Direct_Attacks' stroke='#8884d8' />
          <XAxis dataKey="Book" label={{value: "Book", dy: 16}}/>
          <YAxis dataKey="Direct_Attacks" label={{value: "Death Events", angle: -90, dx: -10}}/>
          <Tooltip />
        </LineChart>
      </div>
    </div>
  )
}

export default Linechart
