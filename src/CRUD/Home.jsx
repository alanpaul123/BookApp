import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookserver-swem.onrender.com/books")
      .then((res) => {
        console.log(res.data);
        return setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are u sure do u want to delete ? ");
    if (confirm) {
      axios
        .delete("https://bookserver-swem.onrender.com/books/" + id)
        .then((res) => {
          alert("Book Deleted");
          navigate("/");
        });
    }
  };

  return (
    <>
      <div className="home">
        <Link to={"/create"} className="btn-c">
          Create
        </Link>
        <div className="boxes">
          {data.map((book, i) => {
            return (
              <div className="box" key={i}>
                <img src={book.img} alt="" />
                <p className="p1">{book.bookname}</p>
                <p className="p2">{book.author}</p>
                <p className="p3">$ {book.price}</p>

                <div className="action">
                  <Link to={`/update/${book.id}`} className="btn-1">
                    Update
                  </Link>
                  <button
                    className="btn-2"
                    onClick={(e) => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/read/${book.id}`} className="btn-3">
                    Read
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
