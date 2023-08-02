import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
  if (!email || !password) {
    setError('Please enter both email and password.');
    return;
  }

  try{
   const response = fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
  } catch (error) {
    console.log('111');
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

                  <form onSubmit={handleLogin}>
                    <div className="group-input">
                      <label htmlFor="username">Username or email  *</label>
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="group-input">
                      <label htmlFor="pass">Password *</label>
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
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
                    <a href="./register.html" className="or-login">Or Create An Account</a>
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
