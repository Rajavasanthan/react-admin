import React from "react";
import { useParams } from "react-router-dom";

function UserEdit() {
  let params = useParams();
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Edit - {params.id}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Phone</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-6">
                <label>Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-4">
                <label>Country</label>
                <select className="form-control">
                  <option value="IN">India</option>
                  <option value="US">United States of America</option>
                  <option value="CH">China</option>
                </select>
              </div>
              <div className="col-lg-4">
                <label>State</label>
                <select className="form-control">
                  <option value="TN">Tamil Nadu</option>
                  <option value="KE">Kerla</option>
                  <option value="AN">Andra</option>
                </select>
              </div>
              <div className="col-lg-4">
                <label>City</label>
                <select className="form-control">
                  <option value="IN">Chennai</option>
                  <option value="MD">Madurai</option>
                  <option value="CBE">Coimbatore</option>
                </select>
              </div>
              <div className="col-lg-4 mt-3">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEdit;
