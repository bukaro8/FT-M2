import React from 'react';
import style from '../card/card.module.css'
export default function Card(props) {
  // acá va tu código
  return(
  <div className={style.cardBox}>
      <button className={style.button}  onClick={props.onClose}>X</button>
      <h2 className={style.title}>{props.name}</h2>{/* //?city name*/}
      <div className={style.innerBox}>
        <div className={style.max}>
          <h2 className={style.subtitle}>MAX</h2>
          <h3 className={style.temp}>{props.max}</h3>
        </div>
      <div className='min'>
        <h2 className={style.subtitle}>MIN</h2>
        <h3 className={style.temp}>{props.min}</h3>
      </div>
      
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt=""  />
      
    </div>
  </div>)
};