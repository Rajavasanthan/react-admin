import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  let [userList, setUserList] = useState([]);
  
  useEffect(() => {
    getData();
  }, []); // On Mount

  let getData = async () => {
    let userData = await axios.get(
      "https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata"
    );
    setUserList(userData.data);
  };

  let handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    let res = confirm("Are your sure do you want to delete this user?");
    if (res) {
    }
  };

  // Formik
  // Context
  // API Call using axios
  // useReducer
  // intro to Redux
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="/usercreate"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  userList.map((user) => {
                    return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                   
                    <td>
                      <Link to={`/userview/${user.id}`} className="btn btn-warning btn-sm">
                        View
                      </Link>
                      <Link to={`/useredit/${user.id}`} className="btn btn-primary btn-sm">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  })
                }
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
