import SearchResult from './SearchResult'




function SearchResultsList({results, setDropToggle}) {
  return (
    <div className='results-list'>
        { 
            results?.map((result,id)=>{
                return <SearchResult setDropToggle={setDropToggle} result={result} key={id}  />
                
            })
            
        }
    </div>
  )
}

export default SearchResultsList