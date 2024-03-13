import React, { useState } from 'react'
import Nav from './Nav'
import { FaRegIdCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { MdOutlineFlightLand } from "react-icons/md";
import { useAtom } from 'jotai';
import { first, last } from '../jotai';







function Passenger() {
    
    const location=useLocation()
    const { state } = location;
    const {itm}=state

    const [firstname,setfirstname]=useAtom(first)
    const [lastname,setlastname]=useAtom(last)
    const minbirthdate=new Date()
    minbirthdate.setFullYear(minbirthdate.getFullYear()-18)
    const minBirthdateString =minbirthdate.toISOString().split('T')[0]
    const [formData, setFormData] = useState({
        dob: '',
        gender: '',
      });
    
    const navigate=useNavigate()
    const validation=()=>{
        if(firstname.length>0 && lastname.length>0 && formData.dob!=='' && formData.gender!=='' && formData.dob<=minBirthdateString){
            navigate('/confirmation')
        }else if(formData.dob>minBirthdateString){
            alert('You are below age so you are not allowed to book tickets')

        }else{
            alert('Please fill all the fields')
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
  return (
    <div>
        <Nav/>
        <div className='container'>
            <div className='flight-summary'>
                <div className='flight-passenger'>
                    <div className='upper-cancellation flex space-between'>
                    <div className='flight-information flex align-center'>
                    <IoInformationCircleSharp size={30} color='#2e71d6'/>&nbsp;
                    <p>Flight Summary</p>

                    </div>
                    <div className='easy-cancellation '>
                        <div className='ticketoutline flex align-center'>
                        <FaCircleCheck size={25} color='#fff'/> &nbsp;
                        <p>Easy Cancellation within 24 hours.</p>
                        </div>
                    
                    </div>
                    </div>
                    <div className='final-details flex space-between'>
                        <div className='depparture-icon flex align-center'>
                        <RiFlightTakeoffLine size={30} color='#2e71d6'/>&nbsp;
                <p>Departure- {itm.deptCity} | {itm.deptCity} Airport,{itm.deptCity}</p>
                        </div>
                        <div className='arrival-icon flex'>
                        <MdOutlineFlightLand size={30} color='#2e71d6' />
                        <p>Arrival- {itm.arivalCity} | {itm.arivalCity} Airport,{itm.arivalCity}</p>

                        </div>
                        
                
                
                   
                </div>
                <div className='letsee flex space-between align-center'>
                <div className='finalairline-details'>
                    <span>Airline Name</span>
                    <p>{itm.airlineName}</p>
                    <p>{itm.flightNbr}</p>
                </div>
                <div className='from-details'>
                    <span>From</span>
                   <p>{itm.deptCity}</p>
                   <p>{itm.deptCity} Airport</p>
                </div>
                <div className='to-details'>
                    <span>To</span>
                <p>{itm.arivalCity}</p>
                    <p>{itm.arivalCity} Airport</p>
                </div>
                <div className='final-duration'>
                    <span>Duration</span>
                    <p>02:00Hr</p>
                </div>
                </div>
                
               

                </div>
            </div>
            <div className='passenger-form'>
              
                <div className='passenger-details '>
                <div className='traveler-information flex align-center'>
                <FaRegIdCard size={30} color='#2e71d6' />&nbsp;
                <p>Traveler Information</p>

                </div>
                <div className='important'>
                    <p>IMPORTANT:  Each passengers' full name must be entered as it appears on their passport or government issued photo ID. Name changes are not permitted after booking.</p>
                </div>
                <div className='enter-details'>
                    <p>Enter Traveler(s) Details Below:</p>
                </div>
                    <div className='first-last flex space-between'>
                        <div className='firstname'>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
                        </div>
                        <div className='last-name'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} />
                        </div>

                       
                    </div>
                   
                        <div className='gender-details flex space-between'>
                            <div className='male'>
                                <label htmlFor="">Gender</label>
                                <select id="gender"name="gender" value={formData.gender} onChange={handleInputChange}required >
                                <option value="" disabled>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className='birthday'>
                                <label ht1mlFor="">BirthDate</label>
                                <input type="date" value={formData.dob} id='dob' name='dob' onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className='booknow'>
                            <button onClick={()=>validation()}><FaLock />&nbsp; Book Now</button>
                        </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Passenger