import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useParams } from 'react-router-dom'

const UserEdit = () => {
  const { register, handleSubmit, watch, formState: { errors, touched }, } = useForm();

  const [user, setUser] = useState([]);
const {userId} = useParams();

  const onSubmit = (data) => {
    console.log(data);
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setUser(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchAllUser();
  }, []);

  return (
    <>
    <div>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
              <Link to="/"><i className="fa fa-home" /> Home</Link>
                  <span>User Management</span>
                  <Link to="/user" className="btn btn-sm btn-primary text-light mx-5"> User</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="register-login-section spad">
          <div className="container">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="username"> Name  *</label>
                      <input type="text" {...register("name", { required: true })} value={user.firstName} placeholder="Your name" />
                      {errors.name?.type === 'required' && <span className="text-danger">The name field is required</span>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="email"> Email  *</label>
                      <input type="text" {...register("email", { required: true })} placeholder="Your email" />
                      {errors.email?.type === 'required' && <span className="text-danger">The email field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="phone"> Phone  *</label>
                      <input type="text" {...register("phone", { required: true })} placeholder="Your phone" />
                      {errors.phone?.type === 'required' && <span className="text-danger">The phone field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="pass">Password *</label>
                      <input type="text" {...register("password", { required: true })} placeholder="Your password" />
                      {errors.password?.type === 'required' && <span className="text-danger">The password field is required</span>}
                    </div>
                  </div>
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
                <button type="submit" className="site-btn login-btn text-dark">Submit</button>
              </form>

              <div className="switch-login">
                <a href="./register.html" className="or-login">Or Create An Account</a>
              </div>
            </div>
          </div>
        </div>
    </div>

  </>
  )
}

export default UserEdit
