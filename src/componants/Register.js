import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { registerUser } from '../reducers/rootReducerSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors, touched }, } = useForm();
  const dispatch = useDispatch();

  const successAlert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Customer has been added successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const onSubmitRegister = (register_data) => {
   console.log(register_data)
    // const fileMetadata = {
    //   name: register_data.image[0].name,
    //   size: register_data.image[0].size,
    //   type: register_data.image[0].type,
    // };

    const serializableData = {
      first_name: register_data.first_name,
      last_name: register_data.last_name,
      email: register_data.email,
      phone: register_data.phone,
      password: register_data.password,
      address: register_data.address,
      gender: register_data.gender,
      category: register_data.category,
      // image: register_data.image[0],
      // image: fileMetadata,
      id: Date.now().toString(),
    };
    console.log(serializableData);

    dispatch(registerUser(serializableData));
    successAlert();

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
                      <label htmlFor="firstname">First Name  <span className="text-danger">*</span> </label>
                      <input type="text" {...register("first_name", { required: true , maxLength: 20})} placeholder="Your First Name" />
                      {errors.first_name?.type === 'required' && <span className="text-danger">The First Name field is required</span>}
                      {errors.first_name?.type === 'maxLength' && <span className="text-danger">The First Name field is max 20 charactors</span>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="last_name">Last Name  <span className="text-danger">*</span> </label>
                      <input type="text" {...register("last_name", { required: true , minLength: 3 })} placeholder="Your Last Name" />
                      {errors.last_name?.type === 'required' && <span className="text-danger">The Last Name field is required</span>}
                      {errors.last_name?.type === 'minLength' && ( <span className="text-danger">The Last Name field should be at least 3 characters</span> )}
                      {/* {touched.name?.type === 'required' && <p>Name field has been touched</p>} */}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="email"> Email  <span className="text-danger">*</span> </label>
                      <input type="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} placeholder="Your Email" />
                      {errors.email && errors.email?.type === 'required' && <span className="text-danger">The Email field is required</span>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="phone"> Phone  <span className="text-danger">*</span> </label>
                      <input type="number" {...register("phone", { required: true, minLength: 8, maxLength: 12 })}  placeholder="Your Phone" />
                      {errors.phone?.type === 'required' && <span className="text-danger">The Phone field is required</span>}
                      {errors.Phone?.type === 'minLength' && <span className="text-danger">The Phone number must be at least 8 digits</span>}
                      {errors.Phone?.type === 'maxLength' && <span className="text-danger">The Phone number must be at most 12 digits</span>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="pass">Password <span className="text-danger">*</span> </label>
                      <input type="password" {...register("password", { required: true })} placeholder="Your Password" />
                      {errors.password?.type === 'required' && <span className="text-danger">The Password field is required</span>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="cpass">Confirm Password <span className="text-danger">*</span> </label>
                      <input type="password" {...register("confirm_password", { required: true })} placeholder="Your Confirm Password" />
                      {errors.confirm_password?.type === 'required' && <span className="text-danger">The Confirm Password field is required</span>}
                      {password !== confirm_password && (<span className="text-danger"> Passwords do not match</span>)}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="gender"> Gender <span className="text-danger">*</span> </label>
                      <input type="radio" {...register("gender", { required: true })} value="Male" style={{ height: 20, width: 30 }} /> Male
                      <input type="radio" {...register("gender", { required: true })} value="Female" style={{ height: 20, width: 30 }} /> Female
                      <br></br>
                      {errors.gender?.type === 'required' && <span className="text-danger">The Gender field is required</span>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="category"> Category <span className="text-danger">*</span> </label>
                      <select {...register("category", { required: true })} className="form-control">
                        <option value="">Select Category</option>
                        <option value="laptops">laptops</option>
                        <option value="fragrances">fragrances</option>
                        <option value="smartphones">smartphones</option>
                        <option value="groceries">groceries</option>
                      </select>
                      {errors.category?.type === 'required' && <span className="text-danger">The Category field is required</span>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="group-input">
                      <label htmlFor="image">Image <span className="text-danger">*</span> </label>
                      <input type="file" name="image" {...register('image', { required: false })} className="form-control form-control-solid form-control-lg" />
                      {errors.image && errors.image.type == 'required' &&
                        <span className="text-danger">The Image field is required</span>
                      }
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="group-input">
                      <label htmlFor="address"> Address  <span className="text-danger">*</span> </label>
                      <textarea id="textarea" {...register('address', { required: true })} className="form-control"
                        rows="4" cols="50"  ></textarea>
                      {errors.address?.type === 'required' && <span className="text-danger">The Address field is required</span>}
                      {/* {errors.address && (<p className="text-danger">The Description field is required</p>)} */}
                    </div>
                  </div>

                </div>

                <div className="group-input gi-check">
                  <div className="gi-more">
                    <label htmlFor="save-pass"> Save Password
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
