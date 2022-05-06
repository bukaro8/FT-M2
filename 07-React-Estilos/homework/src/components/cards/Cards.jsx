import React from 'react';
import style from './cards.module.css'
import Card from '../card/Card';
export default function Cards(props) {
  // acá va tu código
   // tip, podés usar un map
 return (
  <div className={style.container}>
    {props.cities.map((element)=>{
     return <Card key={element.id}
     max={element.main.temp_max}
     min={element.main.temp_min}
     name={element.name}
     img={element.weather[0].icon}
     onClose={() => alert(element.name)}
   />
   })}
  </div> 
 )
};