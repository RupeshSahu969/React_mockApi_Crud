import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleGetData = () => {
    axios
      .get("https://669c983a15704bb0e303cbdc.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://669c983a15704bb0e303cbdc.mockapi.io/crud/${id}`)
      .then(() => {
        handleGetData();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped bg-black">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <CiEdit onClick={() => handleEdit(item.id)} style={{ cursor: "pointer" }} />
                  </td>
                  <td>
                    <MdDeleteOutline onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
