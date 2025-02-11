import React, {useState} from 'react';
export function Form(){
  const [username, setUsername] = useState('');
  const [email, setEmail] =useState();
 
  const handleClick = () =>{ 
    console.log(username,email)
  }
  return(
   <form>
     <h1>Form</h1>
      <div style={{marginBottom:'10px'}}>
        <label htmlFor="username">User Name</label>
        <br/>
        <input type="text" id="username" name="username" value={username} 
          onChange = {(e)=> setUsername(e.target.value)}
        />
      </div>
      <div style={{marginBottom:'10px'}}>
        <label htmlFor="email">Email</label>
        <br/>
        <input type="text" id="email" name="email" value={email} onChange ={(e)=>setEmail(e.target.value)}/>
      </div>
      <button onClick={handleClick}>Submit</button>
   </form>
  )
}