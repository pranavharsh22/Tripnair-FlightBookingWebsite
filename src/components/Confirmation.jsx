import React, { useRef } from 'react'
import Nav from './Nav'
import { BiCheckCircle } from "react-icons/bi";
import qr from '../images/QR_code_for_mobile_English_Wikipedia.svg.png'
import Footer from './Footer';
import { depart, filteropen, first, firstname, last, lastname } from '../jotai';
import { goingto } from '../jotai';
import { useAtom } from 'jotai';
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { GiAirplaneArrival } from "react-icons/gi";
import { useReactToPrint } from 'react-to-print';

import ticket from '../images/Screenshot (317).png'
import { useLocation } from 'react-router-dom';

function Confirmation() {

  const[going]=useAtom(goingto)
  const[departs]=useAtom(depart)
  const [final]=useAtom(filteropen)
  const [lastfinal]=useAtom(last)
  const [firstfinal]=useAtom(first)
  const print=useRef();
  const handlePrint = useReactToPrint({
    content: () => print.current,
  });


  
  
  return (
    <div>
        <Nav/>
        <div className='booking-confirmation'>
            <p>Booking confirmation</p>

        </div>
        <div className='container' style={{marginBottom:'50px'}}>
        <div className='flight-booked text-center'>
            <div className='tick'> <BiCheckCircle size={35} color='#2e71d6'/>
            <p>Your Flight is booked!</p></div>
           
            <div className='hello-john'>
                <p><span>Hello {firstfinal}  {lastfinal}!</span> Congratulations your flight has been booked please check the details carefully.Thank you so much for using our platform. Wish you a Safe Journey.</p>
            </div>
        </div>
        <div className='ticket-layout ' ref={print}>
            <div className='person-information flex space-between'>
                <div className='airlineinformation flex align-center justify-center'>
                    <div className='airlinename'>
                        <img src={final.airlineLogo} alt="" />
                    </div>
                    <div className='airline'>
                        <p>{final.airlineName} Airlines</p>
                    </div>
                </div>
            <div className='ticket-final justify-start'>
            <div className='passenger'>
                <p>Passenger Name</p>
                <div className='john'>
                <p>{firstfinal} {lastfinal}</p>
                </div>
                
            </div>
            <div className='ticket-number'>
                <p>Ticket Number</p>
                <p className='bold'>253466235123412</p>
            </div>
            </div>
            <div className='qr-code'>
                <img src={qr} alt="" />
            </div>
            </div>
            <div className='fromto flex space-between'>
                <div className='from'>
                    <p>From</p>
                    <span>{final.deptCity}</span>
                    <p> {final.deptCity} Airport</p>
                </div>
                <div className='flight-depart flex space-between align-center'>
                    <p><MdOutlineFlightTakeoff color='#2e71d6'/> Depart <span>{final.deptTime}</span></p>
                    <p><img src={ticket} alt="" /></p>
                    <p><GiAirplaneArrival color='#2e71d6'/> Arrival <span>{final.arivalTime}</span></p>
                </div>
                <div className='to'>
                    <p>To</p>
                    <span>{final.arivalCity}</span>
                    <p>{final.arivalCity}  International Airport</p>
                </div>
            </div>
           
            
           
            
        </div>
        <div className='print-btn'>
                <button onClick={handlePrint}>Print ticket</button>
            </div>

        </div>
       
        <Footer/>
      
    </div>
  )
}

export default Confirmation