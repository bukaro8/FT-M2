import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <>
    <input type="text" placeholder='ciudad' id='cityInput' />
    <input type="button" value="Agregar" onClick={()=>props.onSearch('London')}/>
  </>
};