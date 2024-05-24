import { useState } from "react";

import Home from "./CRUD/Home";
import Create from "./CRUD/Create";
import Update from "./CRUD/Update";
import Read from "./CRUD/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
