import { useState, React } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    img: "",
    price: "",
    author: "",
    bookname: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://bookserver-swem.onrender.com/books", inputData)
      .then((res) => {
        alert("Data Posted SucessFully");
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

export default Create;
