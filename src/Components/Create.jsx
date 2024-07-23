import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      age,
    };
    // axios
    //   .post("https://669c983a15704bb0e303cbdc.mockapi.io/crud", payload)
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/");
    //   })
    //   .catch((err) => console.log(err));

    // console.log(payload);

    try {
      const res = await fetch("https://669c983a15704bb0e303cbdc.mockapi.io/crud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      console.log(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3 mt-2">
            <Link to="read">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary">
            <h1>Registion</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <lable>Enter Name :</lable>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <lable>Enter Email :</lable>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <lable>Enter Age :</lable>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
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

export default Create;
