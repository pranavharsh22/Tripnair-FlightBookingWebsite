import React from 'react'
import Goingresult from './Goingresult'

function Goingto({goingplace,setball}) {
  return (
    <div className='results-list'>
        {
            goingplace?.map((result1,id)=>{
                return <Goingresult result1={result1} key={id} setball={setball}/>
            })
        }
    </div>
  )
}

export default Goingto