import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [findCity, setFindCity]=useState('');
  const changing=(e)=>{
    e.preventDefault();
    setFindCity(e.target.value)
  }
  const onSubmitForm=(e)=>{
      e.preventDefault();
      onSearch(findCity);
      setFindCity('')
  }
  return (
    <form onSubmit={(e) => onSubmitForm(e)}>
    <div className="input-group">
      <input  
              onChange={(e)=>changing(e)}
              className="input-group-text"
              type="text"
              placeholder="Ciudad..."
              value={findCity}
      />
      <input className="btn btn-primary" type="submit" value="Agregar" />
    </div>
    </form>
  );
}
