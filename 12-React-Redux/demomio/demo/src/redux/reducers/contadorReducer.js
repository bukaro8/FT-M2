//?primero traer las acciones
import { INCREMENTAR, DECREMENTAR } from "../actions/contadorActions"
//?creamos initialState 
const initialSate={
  contador:0,
  nombre:'contador 1'
}

const ContadorReducer=(state=initialSate,action)=>{
  if (action.type===INCREMENTAR){
    return{
      ...state,
      contador:state.contador+ action.payload
    }
  }
  if(action.type===DECREMENTAR){
    return{
      ...state,
      contador:state.contador- action.payload
    }
  }
  else return {...state}
}

export default ContadorReducer