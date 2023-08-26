import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { fetchUserById } from '../reducers/rootReducerSlice';

const UserShow = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [dispatch, userId]);

  // const user = useSelector((state) => state.user)
  const user = JSON.parse(localStorage.getItem('reduxState'))?.userList?.user || [];


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
            <div className="row my-2">
              <div className="col-2 h6">First Name :</div>
              <div className="col-6">{user.firstName}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6">Last Name :</div>
              <div className="col-6">{user.lastName}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6">Phone Number :</div>
              <div className="col-6">{user.phone} </div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6"> Email :</div>
              <div className="col-6">{user.email}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6"> Date Of Birth :</div>
              <div className="col-6">{user.birthDate}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6"> Age :</div>
              <div className="col-6">{user.age}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6"> Gender :</div>
              <div className="col-6">{user.gender}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6"> University :</div>
              <div className="col-6">{user.university}</div>
            </div>

            <div className="row my-2">
              <div className="col-2 h6"> Image :</div>
              <div className="col-6">
                <img width="150" height="100" src={user.image} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default UserShow
