import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    },[])


    const handleClick = async ()=>{
        let result = await fetch("http://localhost:5000/login" ,{
            method: "post",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }else{
            alert("Invalid Credentials");
        }
    }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input className='inputBox' type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Enter Email' />
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className='inputBox' value={password} placeholder='Enter Password' />
      <button type='button' onClick={handleClick} className='appButton'>Login</button>
    </div>
  )
}

export default Login;
