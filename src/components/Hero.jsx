import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import heroImg from "../assets/images/hero-v.2.0.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="herocontainer">
        <img className="img-fluid" src={heroImg} alt="Travel to Germany" />
      </div>
    </section>
  );
};

export default Hero;
