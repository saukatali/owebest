import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { authReducer, registerUser } from '../reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors, touched }, } = useForm();
  const [auth, setAuth] = useState(false);

  const dispatch = useDispatch();

  const onSubmitRegister = (register_data) => {
    console.log(register_data);
    if (auth == 'signup') {

    } else {
      dispatch(registerUser({ email: register_data.email, password: register_data.password }));
    }
  }

  const password = watch("password");
  const confirm_password = watch("confirm_password");

  return (
    <>
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <Link to="/"><i className="fa fa-home" /> Home</Link>
                  <span>Register</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="register-login-section spad">
          <div className="container">
            <div className="login-form">
              <form className="mws-form login-form" encType="multipart/form-data" autoComplete="off"
                onSubmit={handleSubmit(onSubmitRegister)}  >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="firstname">First Name  *</label>
                      <input type="text" {...register("first_name", { required: true })} placeholder="Your First Name" />
                      {errors.first_name?.type === 'required' && <span className="text-danger">The first name field is required</span>}
                      {/* {touched.name?.type === 'required' && <p>Name field has been touched</p>} */}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="last_name">Last Name  *</label>
                      <input type="text" {...register("last_name", { required: true })} placeholder="Your Last Name" />
                      {errors.last_name?.type === 'required' && <span className="text-danger">The last name field is required</span>}
                      {/* {touched.name?.type === 'required' && <p>Name field has been touched</p>} */}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="email"> Email  *</label>
                      <input type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Your Email" />
                      {errors.email && errors.email?.type === 'required' && <span className="text-danger">The email field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="phone"> Phone  *</label>
                      <input type="text" {...register("phone", { required: true, minLength: 6, maxLength: 10 })} placeholder="Your Phone" />
                      {errors.phone?.type === 'required' && <span className="text-danger">The phone field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="pass">Password *</label>
                      <input type="password" {...register("password", { required: true })} placeholder="Your Password" />
                      {errors.password?.type === 'required' && <span className="text-danger">The password field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="cpass">Confirm Password *</label>
                      <input type="password" {...register("confirm_password", { required: true })} placeholder="Your Confirm Password" />
                      {errors.confirm_password?.type === 'required' && <span className="text-danger">The confirm password field is required</span>}
                      {password !== confirm_password && (<span className="text-danger">Passwords do not match</span>)}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="image">Image *</label>
                      <input type="file" name="image" {...register('image', { required: false })} className="form-control form-control-solid form-control-lg" />
                      {errors.image && errors.image.type == 'required' &&
                        <span className="text-danger">The image field is required</span>
                      }
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
                  </div>
                </div>
                <button type="submit" className="site-btn login-btn text-dark">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Register
