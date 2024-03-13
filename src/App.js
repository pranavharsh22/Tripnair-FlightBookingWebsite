import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Confirmation from './components/Confirmation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Flightresults from './components/Flightresults';
import Loading from './components/Loading';
import { useNavigate } from 'react-router-dom';
import { depart } from './jotai';
import { useAtom } from 'jotai';
import { goingto } from './jotai';
import data from './Data/data';
import { useState,useEffect } from 'react';
import Passenger from './components/Passenger';

function App() {
  const[departing]=useAtom(depart)
  const[arrival]=useAtom(goingto)
  const[selectedcategory,setselectedcategory]=useState(null)
  
  


 
 
  const filteredItems=data.filter((flight)=>flight.deptCity===departing && flight.arivalCity===arrival)
  const handleChange=(event)=>{
    setselectedcategory(event.target.value)

  }
  

  function filteredData(data,arrival,departing,selectedcategory){
    var filteredProducts=data;
    if(arrival && departing){
      filteredProducts=filteredItems;
    }
    if(selectedcategory){
      filteredProducts=filteredProducts.filter(({noOfStops,airlineName})=>
      noOfStops===selectedcategory ||
      airlineName===selectedcategory
      )
    }
    return filteredProducts
  }

  const result=filteredData(data,arrival,departing,selectedcategory)
  console.log(result)


  
 
  
  return (
    <div className="App">
     
       <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/confirmation' element={<Confirmation/>}/>
        <Route exact path='/loading' element={<Loading />} />
        <Route exact path='/final' element={<Flightresults result={result} handleChange={handleChange}/>}/>
        <Route exact path='/passenger/:itmId' element={<Passenger/>}/>
      </Routes>
     </Router>    
     
     
    
    </div>
  );
}

export default App;
