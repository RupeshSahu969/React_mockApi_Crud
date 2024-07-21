import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState({ name: "", email: "", age: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    axios
      .get(`https://669c983a15704bb0e303cbdc.mockapi.io/crud/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`https://669c983a15704bb0e303cbdc.mockapi.io/crud/${id}`, data)
      .then(() => {
        navigate("/read");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3 mt-2">
            <Link to="/read">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary">
            <h1>Update Registration</h1>
          </div>
          <form onSubmit={handleEdit}>
            <div className="form-group">
              <label>Enter Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Enter Email :</label>
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Enter Age :</label>
              <input
                type="number"
                name="age"
                value={data.age}
                placeholder="Age"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
