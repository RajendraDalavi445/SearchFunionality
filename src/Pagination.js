import React, { useContext } from 'react'
import { AppContext } from './context';

const Pagination = () => {
  const {page, nbPages, getPrevPage, getNextPage} = useContext(AppContext);
  return (
    <>
      <div className='pagination_btn'>
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={()=>getNextPage()}>NEXT</button>
      </div>
    </>
  )
}

export default Pagination;