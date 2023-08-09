import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const UserAdd = () => {
  const { register, handleSubmit, watch, formState: { errors, touched }, } = useForm();
  const navigate = useNavigate();
  const [userdata, setUserData] = useState([]);

      // start async function using api
      async function formSubmitHander(user) {
        console.log(user);
        console.log(JSON.stringify(user));
        let formData = new FormData()
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("phone", user.phone);
        formData.append("image", user.image[0]);

       try {
        console.log(formData)
        //  const user =  await axios.post(`http://phpdemo.dev21.obtech.inet/kamil/api/users/store`, formData);
        localStorage.setItem('userdata', JSON.stringify(formData));
        setUserData(formData);
           navigate('/user');
       }
       catch (error) {
           console.error('Error form submit data:', error);
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


              <form className="mws-form login-form" encType="multipart/form-data" autoComplete="off" onSubmit={handleSubmit(formSubmitHander)}  >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="firstname">First Name  *</label>
                      <input type="text" {...register("first_name", { required: true })} placeholder="Your first name" />
                      {errors.first_name?.type === 'required' && <span className="text-danger">The first name field is required</span>}
                      {/* {touched.name?.type === 'required' && <p>Name field has been touched</p>} */}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="last_name">Last Name  *</label>
                      <input type="text" {...register("last_name", { required: true })} placeholder="Your last name" />
                      {errors.last_name?.type === 'required' && <span className="text-danger">The last name field is required</span>}
                      {/* {touched.name?.type === 'required' && <p>Name field has been touched</p>} */}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="email"> Email  *</label>
                      <input type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Your email" />
                      {errors.email && errors.email?.type === 'required' && <span className="text-danger">The email field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="phone"> Phone  *</label>
                      <input type="text" {...register("phone", { required: true, minLength: 6, maxLength: 10 })} placeholder="Your phone" />
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

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="image">Image *</label>
                      <input type="file" name="image" {...register('image', { required: false })} className="form-control form-control-solid form-control-lg" />
                      { errors.image && errors.image.type == 'required' &&
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

export default UserAdd
