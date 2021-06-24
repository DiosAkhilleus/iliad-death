import React from 'react'
import {useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
// const attackData = require('../json/Iliad_Deaths.json').Attacks;

const Linechart = ( {selectedBooks} ) => {
 
  const [dataArr, setDataArr] = useState ([{"Book": "1", "Death_Total": 0}, {"Book": "2", "Death_Total": 0}, {"Book": "3", "Death_Total": 0}, {"Book": "4", "Death_Total": 7}, {"Book": "5", "Death_Total": 42}, {"Book": "6", "Death_Total": 15}, {"Book": "7", "Death_Total": 3}, {"Book": "8", "Death_Total": 13}, {"Book": "9", "Death_Total": 0}, {"Book": "10", "Death_Total": 2}, {"Book": "11", "Death_Total": 39}, {"Book": "12", "Death_Total": 11}, {"Book": "13", "Death_Total": 18}, {"Book": "14", "Death_Total": 14}, {"Book": "15", "Death_Total": 18}, {"Book": "16", "Death_Total": 39}, {"Book": "17", "Death_Total": 8}, {"Book": "18", "Death_Total": 0}, {"Book": "19", "Death_Total": 0}, {"Book": "20", "Death_Total": 14}, {"Book": "21", "Death_Total": 9}, {"Book": "22", "Death_Total": 1}, {"Book": "23", "Death_Total": 0}, {"Book": "24", "Death_Total": 0}]);

  return (
    <LineChart width={800} height={400} data={(selectedBooks === [0, 24]) ? dataArr : dataArr.slice(selectedBooks[0], selectedBooks[1])} margin={{ top: 5, right: 20, bottom: 20, left: 0}}>
      <Line type='monotone' dataKey='Death_Total' stroke='#8884d8' />
      <XAxis dataKey="Book" label={{value: "Book", dy: 16}}/>
      <YAxis dataKey="Death_Total" label={{value: "Death Events", angle: -90, dx: -10}}/>
    </LineChart>
  )
}

export default Linechart
