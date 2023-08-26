import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../reducers/rootReducerSlice';


const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user) 
  const users = JSON.parse(localStorage.getItem('reduxState'))?.userList?.user || [];
  console.log(users)


  const handleEditUser = (userId) => {
    // navigate.push(`/user-edit/${userId}`);
    navigate(`/user-edit/${userId}`);
  };

  
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="register-login-section spad">
          <div className="container">
            <div className="row">
              <div className="user-list">
                <table className="table table-striped table-inverse table-responsive">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.first_name}  {user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender ?? 'Male'}</td>
                        <td>{user.address}</td>
                        <td>
                          <Link to={`/user-show/${user.id}`} className="text-primary">
                            <i className="fa fa-eye" aria-hidden="true"></i></Link>

                          <Link className="text-warning mx-2" onClick={() => handleEditUser(user.id)}>
                            <i className="fa fa-pencil" aria-hidden="true"></i></Link>

                            <span onClick={() => navigate(`/user-edit/${user.id}`)} className=" btn-warning mx-2">
                              <i className="fa fa-pencil" aria-hidden="true"></i></span>
                             
                            <Link className="text-danger" onClick={() => dispatch(removeUser(user.id))}>
                            <i className="fa fa-trash" aria-hidden="true"></i></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default User
