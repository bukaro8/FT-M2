import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <form  style={{display:'flex',flexDirection:'column', width:'100%', alignItems:'center'}}>
    <div className='mb-3' style={{display:'flex',flexDirection:'column',width:'30%',alignItems:'center'}}>

    <input className='form-control' type="text" placeholder='ciudad' id='cityInput' />
    <input className='btn btn-success' type="button" value="Agregar" onClick={()=>props.onSearch('London')}/>
    </div>
  </form>
};