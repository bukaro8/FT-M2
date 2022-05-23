import React, {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function  Form() {
  // const [userName,setUserName]=useState('')
  // const [password,setPassword]=useState('')
  const [invUser,setInvUser]=useState('')
  const [invPass,setInvPass]=useState('')
  const [input,setInput]=useState({
    username:'',
    password:'',
  })
  const changeHandle=(e)=>{
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name] : e.target.value}
    )

  }
  // const changeHandleUser=(e)=>{
    
  //   e.preventDefault()
  //   setUserName(e.target.value)

  // }
  // const changeHandlePass=(e)=>{
  //   e.preventDefault()
  //   setPassword(e.target.value)
  // }
  const onSubmit=(e)=>{
    e.preventDefault()
    const regExEmail=  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const regExPass=  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
    let errors={}
    if (!input.username) {
      errors.username = 'Username is required';
      setInvUser(<div class="alert alert-danger" role="alert">
      {errors.username}
    </div>)
    } else
    if(!regExEmail.test(input.username)){
      errors.username =  'Username is invalid';
      setInvUser(<div class="alert alert-danger" role="alert">
      {errors.username}
    </div>)
    }else{
      setInvUser('')
    }
    if(!regExPass.test(input.password)){
      setInvPass(<div class="alert alert-danger" role="alert">
      Password must contain at least one number
    </div>)
    }else{
      setInvPass('')
    }
  }
  return (
    <form
    onSubmit={(e)=>onSubmit(e)}
    style={{width:'30%'}}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
      <input 
      name='username'
      onChange={(e)=>changeHandle(e)}
      value={input.username}
      type="text" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"/>
    </div>
    {invUser}
    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
      <input 
      name='password'
      onChange={(e)=>changeHandle(e)}
      value={input.password}
      type="password" 
      className="form-control" 
      id="exampleInputPassword1"/>
    </div>
    {invPass}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
