import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  // const cityInput=document.querySelector('#cityInput')
  // console.log(cityInput)
  // const agregar=(city=>{
  //   props.cities.find((element=>{
  //     if(element.name==city){
  //       console.log('si')
  //     }
  //   }))
  // })
  return <>
    <input type="text" placeholder='ciudad' id='cityInput' />
    <input type="button" value="Agregar" onClick={()=>props.onSearch('London')}/>
  </>
};