import React from 'react';
import Card from '../components/Card';
export default function Cards(props) {
  // acá va tu código
   // tip, podés usar un map

 return props.cities.map(element=>{
   return <Card
   max={element.main.temp_max}
   min={element.main.temp_min}
   name={element.name}
   img={element.weather[0].icon}
   onClose={() => alert(element.name)}
 />
 })
};