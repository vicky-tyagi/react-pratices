import React from "react";
import "../project/SearchBox.css";

export const SearchBox = (props) => {
  return (
    <input
      className='search-box'
      type='search'
      placeholder='search monsters'
      onChange={props.onSearchChange}
    />
  )
}