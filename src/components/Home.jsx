import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { datetofinal, depart } from '../jotai';
import { useAtom} from 'jotai';
import { goingto } from '../jotai';

import data from '../Data/data';
import SearchResultsList from './SearchResultsList';
import { datefrom } from '../jotai';

import { janeka } from '../jotai';
import Goingto from './Goingto';
import Loading from './Loading';
function Home() {
  const [departing,setdeparting]=useAtom(depart)
  const [going,setgoing]=useAtom(goingto)
 const navigate=useNavigate()
  const [goingplace,setgoingplace]=useState([])
  const [results,setresults]=useState([])
  const [dropToggle, setDropToggle] = useState(false);
  const [ball,setball]=useState(false)
  const [loading,setloading]=useState(false)

const fetchData=(value)=>{
  fetch(data).then(()=>{
    const results=data.filter((user)=>{
      return value && user && user.deptCity && user.deptCity.toLowerCase().includes(value) 
      
    })
    setDropToggle(true)
   
    setresults(results.slice(0,1))
    
    
  })
  
  
}
let goingdata=(value)=>{
  fetch(data).then(()=>{
    const goingplace=data.filter((user)=>{
      return value && user && user.arivalCity && user.arivalCity.toLowerCase().includes(value)
    })
    setball(true)
    setgoingplace(goingplace.slice(0,1))
  })
}

  const handleChange=(value)=>{
    setdeparting(value)
    fetchData(value)
    
  
  
    
  }
  const handlegoing=(value)=>{
    setgoing(value)
    goingdata(value)
  }
  const [from,setFrom]=useAtom(datefrom)
  const [finalTo,setFinalTo]=useAtom(janeka)
  const handlesearch=()=>{
    if(departing.length>0 && going.length>0 && finalTo!=='' && from!==''){
      setloading(true)
      setTimeout(() => {
        setloading(false)
       navigate('/final')
      }, 3000);
    }else{
      alert('Please enter all the fields')
    }
   
  }
  const handledeparturedate=(event)=>{
    const selecteddeparturedate=event.target.value;
    setFrom(selecteddeparturedate)
    const nextday=new Date(selecteddeparturedate)
    nextday.setDate(nextday.getDate()+1)
    const minReturningDate = nextday.toISOString().split('T')[0];
    
    setFinalTo('')
    document.getElementById("returningDate").min = minReturningDate;
    

  }
  const today = new Date().toISOString().split('T')[0];
  
 

  
  return (
    
    <div className='align-center'>
        <Nav/>
        {loading && <Loading/>}
       
       
      
        <section className='gap container flex align-center'>
            <div className='travel-heading col-50 flex-start'>
                <h5>Travel around the world</h5>
                <h1><span>Explore Destinations Effortlessly</span><br/>With Our User-friendly Interface</h1>
                <p>Find and book flights in just few clicks, making travel planning a breeze</p>
            </div>
            <div className='book-form '>
              <div className='one-way flex'>
                <div className='round-trip'>
                <input type="radio" value='1' name='a'/>
               <label>One Way</label>
                </div>
                <div className='way'>
                <input type="radio" value='2' name='a'/>
               <label>Round Trip</label>
                </div>
               
              
              </div>
              <div className='departing-from'>
                <input type="text" placeholder='Departing From?'  value={departing} onChange={(e)=>handleChange(e.target.value)} />

                {dropToggle &&
                  <div><SearchResultsList setDropToggle={setDropToggle} results={results} /></div>
                }
                <input type="text" placeholder='Going to?' value={going} onChange={(e)=>handlegoing(e.target.value)} />
                {
                  ball &&
                  <div><Goingto setball={setball} goingplace={goingplace}/></div>
                }
              </div>
              <div className='date flex space-between'>
                <input type="date"  placeholder='From' value={from} onChange={handledeparturedate} min={today}/>
                <input type="date"  placeholder='To' id="returningDate" min={finalTo}
        required value={finalTo} onChange={(e)=>setFinalTo(e.target.value)} />
              </div>
              <div className='adult-child flex space-between'>
                <select name="" id="">
                  <option value="">1 Adult 0 Child</option>
                </select>
                <select name="" id="">
                  <option value="">Economy Class</option>
                  <option value="">Premium Class</option>
                  <option value="">Buisness Class</option>
                  <option value="">First Class</option>
                </select>
              </div>
              <div className='find-btn'>
                <button onClick={handlesearch}>Find Your Flight</button>
              </div>
             
              
            </div>

        </section>
        <Footer/>
    </div>
  )
}

export default Home