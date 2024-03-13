import React from 'react'
import logo from '../images/logo.b4f263fcf9d560015030.png'
import { FiAlignCenter } from "react-icons/fi";

function Nav() {
  return (
    <header>
    <div className='flex space-between container text-center align-center'>
        <div className='tripnair-logo'>
            <img src={logo} alt="" />
        </div>
        <div className='logo-number'>
            <div className='number flex'>
                <p>+1-888-738-0865</p>
                <div className='side-menu'>
                <p><FiAlignCenter/></p>
                </div>

            </div>
        </div> 
    </div>
    </header>
  )
}

export default Nav