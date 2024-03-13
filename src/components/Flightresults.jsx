import React from 'react'
import Nav from './Nav'
import image from '../images/Screenshot (317).png'
import data from '../Data/data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { filteropen } from '../jotai';





function Flightresults({result,handleChange}) {
    const[finalflight,setfinalflight]=useAtom(filteropen)
    const navigate=useNavigate()
    const handlebook=(itm)=>{
        navigate(`/passenger/${itm.id}`, { state: { itm } })
        setfinalflight(itm)
    }
  return (
    <div className='flightresults'>
        <Nav/>
        <div className='airways-details container flex'>
            <div className='stop-filter'>
                <div className='side'>
                <h2>Stops</h2>
                <div className='stop-checkbox'>
                    <div className='non-stop'>
                    <input type="checkbox" onChange={handleChange} value='0' />&nbsp;
                    <label htmlFor="">Non-Stop</label></div>
                    <div className='one-stop'>
                        <input type="checkbox" onChange={handleChange} value='1'/>&nbsp;
                        <label htmlFor="">1 Stop</label>
                    </div>
                    <div className='two-stop'>
                        <input type="checkbox" onChange={handleChange} value='2' />&nbsp;
                        <label htmlFor="">2 Stop</label>
                    </div>
                </div>
                </div>
                <div className='airline-filter'>
                <div className='airline-checkbox'>
                <h2>Airlines</h2>
                
                
                    <div className='indigo'>
                        <input type="checkbox" onChange={handleChange} value='Indigo'/>&nbsp;
                        <label htmlFor="">Indigo Airlines</label>
                    </div>
                    <div className='spicejet'>
                        <input type="checkbox" onChange={handleChange} value='SpiceJet Airlines' />&nbsp;
                        <label htmlFor="">Spicejet Airlines</label>
                    </div>
                    <div className='air-india'>
                        <input type="checkbox" onChange={handleChange} value='Air India'/>&nbsp;
                        <label htmlFor="">Air India Airlines</label>
                    </div>
                    <div className='vistara'>
                        <input type="checkbox" onChange={handleChange} value='Vistara Airlines' />&nbsp;
                        <label htmlFor="">Vistara Airlines</label>
                    </div>
                </div>
            </div>
               
            </div>
            
            <div className='flight-details'>
            {result?.map((itm)=>
         
          
         <div key={itm.id}>
              <div className='airways-card' style={{marginBottom:'10px'}}>
                   <div className='tickets-information'>
                   <div className='jetblue-airways flex space-between align-center'>
                       <div className='airways-name flex align-center'>
                       <p>{itm.airlineName}</p>
                       <div className='airline-logo'>
                       <img src={itm.airlineLogo} alt="" />
                       </div>
                       
                          
                          
                       </div>
                       <div className='airways-price'>
                           <p>$ {itm.price}</p>
                       </div>
       
                   </div>
                   <div className='book-now flex  align-center space-between'>
                       <div className='lga'>
                       <span>{itm.deptCity}</span>
                       <p>{itm.deptTime}</p>
                       <p>Tue, 20 Feb</p>
                       </div>
                       <div className='screenshot'>
                           <img src={image} alt="" />
                       </div>
                       <div className='bos'>
                           <span>{itm.arivalCity}</span>
                           <p>{itm.arivalTime}</p>
                           <p>Tue, 20 Feb</p>
                       </div>
                       <div className='total-fare'>
                           <span>Total Fare</span>
                           <p>{itm.price}</p>
                       </div>
                       <div className='book-btn'>
                       
                           <button onClick={()=>handlebook(itm)}>
                           Book Now</button>
                           
                       </div>
                       
                   </div>
                   </div>
                  
               </div>
         </div>
                
                 )}
            </div>
          
           
            
        </div>
    </div>
  )
}

export default Flightresults