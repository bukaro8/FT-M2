import React, {Fragment}from 'react';
import { connect } from 'react-redux';
import { decrementar, incrementar } from '../redux/actions/contadorActions';


const Contador=(props)=>{
  console.log(props.contador)
  return(
    <Fragment>
      <h1>Componente Contador</h1>
      <span>{props.contador}</span>
      <button onClick={()=>props.plusplus(1)} id='incrementar'> + </button>
      <button  onClick={()=>props.decrementar(1)} id='decrementar'> - </button>
    </Fragment>
)
}
const mapStatetoProps=(state)=>{
  return{
    contador:state.contador,
    nombre:state.nombre
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return{
    plusplus: (value)=>dispatch(incrementar(value)),
    decrementar:(value=>dispatch(decrementar(value)))

    
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Contador)