import axios from "axios";
import { React, useState, useEffect } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
function Read() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookserver-swem.onrender.com/books/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" read">
      {/* <div className="container p-5">
        <p>{Data.img}</p>
        <p>{Data.bookname}</p>
        <p>{Data.author}</p>
        <p>{Data.price}</p>
      </div> */}

      <div className="readBox">
        <div className="rimg">
          <img src={Data.img} alt="" />
        </div>
        <div className="readc">
          <p>BookName: {Data.bookname}</p>
          <p>Author : {Data.author}</p>
          <p>Price :${Data.price}</p>

          <button className="btn btn-danger">Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default Read;
