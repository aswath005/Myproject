import React, {useState} from 'react';
import useForm from "./useForm";
import validate from "./validate";
import "./index.css"

const Login = () =>  {
  const{ handleChange, handleSubmit, values, errors } = useForm(submit, validate);

  function submit() {
    console.log("submitted successfully");
  }
  return(
  <div className="App">
    <header className="App-header">
    <form onSubmit={handleSubmit} noValidate>
              <h1>
                Login
              </h1>
              <div><label htmlFor="email">Email</label>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="example@gmail.com" 
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className = "error">{errors.email} </p>}
                </div> 
              </div>
              
              <div>
                <label htmlFor="password">password</label>
                  <div> 
                    <input 
                      type="password" 
                      name="password" 
                      placeholder="********" 
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p className = "error">{errors.password} </p>}
                  </div>
              </div> 
              <button>submit</button>
          
    </form>
              
    </header>
    </div>
  );
  }


export default Login;
