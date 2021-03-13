import React, { useState, useEffect } from "react";

import axios from "axios";
import BookCard from "./component/bookCard";
import AddNewWriter from "./component/addWriterModal";
import AddNewCategory from "./component/addCategoryModal";
import AddNewBook from "./component/addBookModal";
import { ToastContainer, toast } from "react-toastify";

const server = "http://localhost:5000/";

export default function MainPage() {
  const [books, updateBooks] = useState([""]);

  useEffect(() => {
    axios
      .get(`${server}books`)
      .then((res) => {
        updateBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className="navbar navbar-light bg-primary"
        style={{ height: "100px" }}
      >
        <div className="ml-5">
          <h1>DUMB LIBRARY</h1>
        </div>
        <div className="d-flex flex-wrap ml-auto mr-3">
          <AddNewBook
            server={server}
            notify={notify}
            updateBooks={updateBooks}
          />
          <AddNewWriter server={server} notify={notify} />
          <AddNewCategory server={server} notify={notify} />
        </div>
      </div>

      <div className="container d-flex flex-wrap bd-highlight mb-3 mt-5">
        {books.map((book) => {
          return (
            <div>
              <BookCard
                book={book}
                key={book.id}
                updateBooks={updateBooks}
                notify={notify}
                server={server}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const notify = (status, alert) => {
  const options = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  toast[`${status}`](`${alert}`, options);
};
