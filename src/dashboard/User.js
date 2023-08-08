import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.users)
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchAllUser();
  }, []);


  const handleEditUser = (id) => {
    alert(id)
    navigate.push("/product");
  };

  const handleRemoveUser = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
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
                  <Link to="/user-add" className="btn btn-sm btn-primary text-light mx-5"> Add New User</Link>
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
                      <th> Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.firstName}  {user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.ip}</td>
                        <td>
                          <Link to={`/user-show/${user.id}`} className="text-primary">
                            <i className="fa fa-eye" aria-hidden="true"></i></Link>
                          <Link className="text-warning mx-2" onClick={() => handleEditUser(user.id)}>
                            <i className="fa fa-pencil" aria-hidden="true"></i></Link>
                            <span onClick={() => navigate(`/user-edit/${user.id}`)} className=" btn-warning mx-2">
                              <i className="fa fa-pencil" aria-hidden="true"></i></span>
                          <Link className="text-danger" onClick={() => handleRemoveUser(user.id)}>
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
