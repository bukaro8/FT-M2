export const INCREMENTAR = 'incrementar';
export const DECREMENTAR = 'decrementar';

export const incrementar=(data)=>{
  return{
    type:INCREMENTAR,
    payload:data
  }
}
export const decrementar=(data)=>{
  return{
    type:DECREMENTAR,
    payload:data
  }
}