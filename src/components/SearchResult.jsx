import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { depart } from '../jotai'
import { filteropen } from '../jotai'


function SearchResult({result, setDropToggle}) {
    const[departresult,setdepartresult]=useAtom(depart)
    
   const total=()=>{
    setdepartresult(result.deptCity)
    setDropToggle(false)
   }

   

  return (
    <div className='search-result' id='resultking' onClick={total} >{result.deptCity}</div>
  )
}

export default SearchResult