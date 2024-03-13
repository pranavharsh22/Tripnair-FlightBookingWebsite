import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { IoAirplane } from "react-icons/io5";
import loader from '../images/airplane-take-off.gif'
import { FaCalendarAlt } from "react-icons/fa";
import Footer from './Footer';
import { depart } from '../jotai';
import { goingto } from '../jotai';
import { useAtom } from 'jotai';
import { janeka } from '../jotai';
import { datefrom } from '../jotai';


function Loading() {
    const [finaldepart]=useAtom(depart)
    const [finalgoing]=useAtom(goingto)
    const [finalfrom]=useAtom(datefrom)
    const [finalto]=useAtom(janeka)
    const [formattedDate,setformattedDate]=useState('')
    useEffect(()=>{
        const formatDate=(date)=>{
            return date.toLocaleDateString('en-US',{
                day:'numeric',
                year:'numeric',
                month:'long',
               
            })
        }
        const today=new Date();
        setformattedDate(formatDate(today))
    },[])
  return (
    <div >       
       <div className="loading-card-top">
            <div className='loading-card'>
                        <div className='card-details text-center'>
                            <div className='phone-number'>
                                <p>+1-888-738-0865</p>
                            </div>
                            <div className='best-flights'>
                                <p>Let us find the best flights for you</p>
                                <p><img src={loader} alt="" /></p>
                                <span>{finaldepart} &nbsp;<IoAirplane/>&nbsp; {finalgoing}</span>
                            </div>
                            <div className='flight-date'>
                                <p><FaCalendarAlt/>&nbsp;Departing Date:&nbsp;{finalfrom}</p>
                                <p><FaCalendarAlt/>&nbsp;Returning Date:&nbsp; {finalto}</p>
                            </div>
                        </div>
            </div>
       </div>
    </div>
  )
}

export default Loading