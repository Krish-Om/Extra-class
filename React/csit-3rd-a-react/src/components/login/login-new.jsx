import React, { useState } from 'react'
import "./login.css"
const LoginNew = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const [showAlert,setShowAlert] = useState(false);

  // const handleLogin = ()=>
  //   if(email === "admin@exampl.com" && password === "password"){
  //     alert("Login Successful")
  //   }else{
  //     setAlert(true);
  //     setTimeout(()=>{
  //       setAlert(false)
  //     },3000)

  //   }
  // }

  return (
    <div>LoginNew</div>
  )
}

export default LoginNew