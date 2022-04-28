import React from 'react';

export default function Card(props) {
  // {max: 300.15, min: 300.15, name: 'Cairns', img: '03n'}
  // acá va tu código
  return(
  <>
    <input type="button" value="x" onClick={props.onClose}/>
    <h2>{props.name}</h2>{/* //?city name*/}
    <div>
      <div className='max'>
        <h2>MAX</h2>
        <h3>{props.max}</h3>
      </div>
      <div className='min'>
        <h2>MIN</h2>
        <h3>{props.min}</h3>
      </div>
      <div className='icon'>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt=""  />
      </div>
    </div>
  </>
  )
};