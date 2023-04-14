import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context';


const Search = () => {
  const {query, searchPost} = useContext(AppContext);
  return (
    <div>
       <h1 className='text-center'>iGap Technical Tech Website</h1>
       <form onSubmit={(e)=>e.preventDefault()}>
         <div className='search'>
           <input className='input' type="text" placeholder='search here' 
            value={query}
            onChange={(e)=>searchPost(e.target.value)}
           />
         </div>
       </form>
    </div>
  )
}

export default Search;