import React from 'react'
import { useAtom } from 'jotai'
import { goingto } from '../jotai'

function Goingresult({result1,setball}) {
    const[goingresult,setgoingresult]=useAtom(goingto)

    const final=()=>{
        setgoingresult(result1.arivalCity)
        setball(false)

    }
  return (
    <div className='search-result1' onClick={final}>{result1.arivalCity}</div>
  )
}

export default Goingresult