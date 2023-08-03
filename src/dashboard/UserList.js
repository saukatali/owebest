import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
const UserList = () => {
    const [users, setUsers] = useState([]);

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


    const handleRemoveToCart = (id) => {
        const updatedUser = users.filter((item) => item.id !== id);
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
                                <span className="text-danger" onClick={() => handleRemoveToCart(user.id)}>Remove</span>
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

export default UserList
