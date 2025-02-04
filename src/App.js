import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Optin from "./components/Optin";
// import Sandbox from "./components/Sandbox";
// import Icons from "./components/Icons";
import First from "./components/First";
// import Main from "./components/Main";
// import Home from "./components/Home";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Credit from "./components/Credit";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Optin />

      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/bloguletz" element={<Blog />}></Route>
        <Route path="/postare" element={<Post />}></Route>
        <Route path="/creditari" element={<Credit />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
