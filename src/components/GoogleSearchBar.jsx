import React from 'react'
import { CiSearch } from "react-icons/ci";

const GoogleSearchBar = () => {
  return (
    <>
        <form action="http://google.com/search" target="_blank">
            <input name="q" className='searchBar' placeholder='search something'/>
            <button type="submit" className='search'><CiSearch/></button>
        </form>
    </>
  )
}

export default GoogleSearchBar