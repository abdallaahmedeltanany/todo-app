import React from 'react'

const SearchItems = ({search,setSearch}) => {
  return (
    <form className="searchForm" onSubmit={e=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        id='search'
        role='searchbox'
        placeholder='search items'
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
         />

    </form>
  )
}

export default SearchItems