/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import React from "react";
import { Link } from "react-router-dom";

function UserList() {
    let handleDelete = (id) => {
        let res = confirm("Are your sure do you want to delete this user?")
        if(res){

        }
    }
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
                <tr>
                  <td>Ramesh</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                  <td>1st Street</td>
                  <td>
                    <Link to="/userview/1" className="btn btn-warning btn-sm">
                      View
                    </Link>
                    <Link to="/useredit/1" className="btn btn-primary btn-sm">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(1)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Suresh</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                  <td>1st Street</td>
                  <td>
                    <Link to="/userview/2" className="btn btn-warning btn-sm">
                      View
                    </Link>
                    <Link to="/useredit/2" className="btn btn-primary btn-sm">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(2)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Babu</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                  <td>1st Street</td>
                  <td>
                    <Link to="/userview/3" className="btn btn-warning btn-sm">
                      View
                    </Link>
                    <Link to="/useredit/3" className="btn btn-primary btn-sm">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(3)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
