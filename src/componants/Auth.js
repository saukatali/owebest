import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors, touched }, } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const onSubmit = (data) => {
    console.log(data);

    const udata = localStorage.getItem('data');
    const loginData = JSON.parse(udata);
    console.log(loginData);

    if (loginData.email === data.email && loginData.password === data.password) {
      console.log('loginnnnn');
      setTimeout(() => {
        setIsLoggedIn(true);
      }, 1000);
    } else {
      alert('Invalid credentials');
    }
  };


  if (isLoggedIn) {
    navigate('/');
    return null;
  }

  return (
    <>
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <Link to="/"><i className="fa fa-home" /> Home</Link>
                  <span>Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="register-login-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="login-form">
                  <h2>Login</h2>

                  {isLoggedIn ? ( <h2>Welcome! You are logged in.</h2>  ) : (  <h2>Please! Logged here.</h2> )}

                  <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="group-input">
                      <label htmlFor="username">Email  *</label>
                      <input type="text" {...register("email", {required:true})} placeholder="Your email" />
                          {errors.email?.type === 'required' && <span className="text-danger">The email field is required</span>}
                    </div>
                    <div className="group-input">
                      <label htmlFor="pass">Password *</label>
                      <input type="password" {...register("password", {required:true})} placeholder="Your password" />
                          {errors.password?.type === 'required' && <span className="text-danger">The password field is required</span>}
                    </div>

                    <div className="group-input gi-check">
                      <div className="gi-more">
                        <label htmlFor="save-pass">
                          Save Password
                          <input type="checkbox" id="save-pass" />
                          <span className="checkmark" />
                        </label>
                        <Link to="/" className="forget-pass">Forget your Password</Link>
                      </div>
                    </div>
                    <button type="submit" className="site-btn login-btn text-dark">Sign In</button>
                  </form>

                  <div className="switch-login">
                    <Link to="/register" className="or-login">Or Create An Account</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
