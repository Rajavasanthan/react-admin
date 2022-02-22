import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  let params = useParams();

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Please Enter the name";
      }

      if (!values.email) {
        errors.email = "Please Enter the Email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email";
      }

      // Regular Expression - Regx

      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        await axios.post(
          "https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata",
          values
        );
        navigate(`/userlist`);
      } catch (error) {
        console.log(error);
      }
    },
  });


  useEffect(() => {
    getData()
  },[])

  let getData = async () => {
    let userdata =  await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata/${params.id}`)
    delete userdata.data.id
    formik.setValues(userdata.data)
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Edit - {params.id}</h1>
      </div>
      <div className="container">
      <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <label>Name</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    name="name"
                    className="form-control"
                  />
                  {formik.errors.name ? (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  ) : null}
                </div>
                <div className="col-lg-6">
                  <label>Email</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name="email"
                    className="form-control"
                  />
                  {formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="col-lg-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    name="phone"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label>Address</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    name="address"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-4">
                  <label>Country</label>
                  <select
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    name="country"
                  >
                    <option value="IN">India</option>
                    <option value="US">United States of America</option>
                    <option value="CH">China</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <label>State</label>
                  <select
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    name="state"
                  >
                    <option value="TN">Tamil Nadu</option>
                    <option value="KE">Kerla</option>
                    <option value="AN">Andra</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <label>City</label>
                  <select
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    name="city"
                  >
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
        </form>
      </div>
    </>
  );
}

export default UserEdit;
