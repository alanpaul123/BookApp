import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    img: "",
    price: "",
    author: "",
    bookname: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://bookserver-swem.onrender.com/books/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("https://bookserver-swem.onrender.com/books/" + id, inputData)
      .then((res) => {
        alert("Data has been updated");
        navigate("/");
      });
  };
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center forms">
        <div className="w-50 create text-white p-5 form a">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="image" style={{ marginBottom: "10px" }}>
                Image:{" "}
              </label>
              <input
                type="text"
                name="image"
                className="form-control"
                style={{ marginBottom: "15px" }}
                onChange={(e) =>
                  setInputData({ ...inputData, img: e.target.value })
                }
                value={inputData.img}
              />
            </div>

            <div>
              <label htmlFor="price" style={{ marginBottom: "10px" }}>
                Price:{" "}
              </label>
              <input
                type="text"
                name="price"
                className="form-control"
                style={{ marginBottom: "15px" }}
                onChange={(e) =>
                  setInputData({ ...inputData, price: e.target.value })
                }
                value={inputData.price}
              />
            </div>

            <div>
              <label htmlFor="author" style={{ marginBottom: "10px" }}>
                Author:{" "}
              </label>
              <input
                type="text"
                name="author"
                className="form-control"
                style={{ marginBottom: "15px" }}
                onChange={(e) =>
                  setInputData({ ...inputData, author: e.target.value })
                }
                value={inputData.author}
              />
            </div>

            <div>
              <label htmlFor="bookname" style={{ marginBottom: "10px" }}>
                Bookname:{" "}
              </label>
              <input
                type="text"
                name="bookname"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, bookname: e.target.value })
                }
                value={inputData.bookname}
              />
            </div>

            <br />

            <button
              className="btn"
              style={{ color: "white", backgroundColor: "#868e96" }}
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
