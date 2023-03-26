import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation";
// import Display from "./Display";


let SignUp = () => {
  let [registered, setRegistered] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleLogin(e) {
      e.preventDefault();
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        
        })
      }).then((response) => response.json())
      .then((data) => {
        // Handle successful login
        
        console.log(data);
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
     setRegistered(true)

  };
    return (
      <div className="main">
<Navigation/>
{registered && <Redirect to='/login' />}
<form id="form-login" onSubmit={handleLogin}>

<div className="form-group">
    <i className="input-icon uil uil-at"></i>
    <input
      type="text"
      name="username"
      id="username"
      className="form-style"
      placeholder="Your Username"
      autoComplete="off"
      onChange={e => setUsername( e.target.value )} required
    />
  </div>

  <div className="form-group">
    <i className="input-icon uil uil-at"></i>
    <input
      type="email"
      name="email"
      id="email"
      className="form-style"
      placeholder="Your Email"
      autoComplete="off"
      onChange={e => setEmail( e.target.value )} required
    />
  </div>
  <div className="form-group mt-2">
    <i className="input-icon uil uil-lock-alt"></i>
    <input
      type="password"
      name="password"
      className="form-style"
      placeholder="Your Password"
      id="password"
      autoComplete="off"
      onChange={e =>
        setPassword( e.target.value )}  required
      
    />
  </div>
  <button type="submit" className="btn btn-secondary mt-4">
  
    Register
  </button>
  {/* <p className="mb-0 mt-4 text-center">
    <a href="#0" className="" style={{"textDecoration": "none", "color": "#adb5bd"}}>
      Forgot Your Password?
    </a>
  </p> */}
</form>

</div>
    )
}

  export default SignUp