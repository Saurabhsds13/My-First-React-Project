import React from "react";
import ReactDOM from "react-dom/client";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Show from "./components/Show";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Hook1 from "./components/Hook1";
import Parent from "./components/Parent";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import store from "./Redux/Store";
import { Provider } from "react-redux";
var record = (
  <BrowserRouter>
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Addrecord" element={<Add />} />
        <Route path="Showrecord" element={<Show />} />
        <Route path="Hookrecord" element={<Hook1 />} />
        <Route path="Parentrecord" element={<Parent />} />
        <Route path="Parent1record" element={<Parent1 />} />
        <Route path="Parent2record" element={<Parent2 />} />
        <Route
          path="CounterRecord"
          element={<Counter name="Saurabh" age="24" />}
        />
      </Routes>
    </div>
  </BrowserRouter>
);
var target = ReactDOM.createRoot(document.querySelector("#root"));
target.render(record);
