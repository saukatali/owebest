import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { registerUser } from '../reducers/rootReducerSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors, touched }, } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState(false);

  const dispatch = useDispatch();

  const onSubmitLogin = (data) => {
    if(auth == 'signup'){

    }else{
      dispatch(registerUser({ email: data.email, password: data.password }));
    }
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

                  <form onSubmit={handleSubmit(onSubmitLogin)} className="login-form">
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
