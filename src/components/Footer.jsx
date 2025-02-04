import React from "react";
import Subsol from "../assets/images/subsol.png";
import logo2 from "../assets/images/logo2.png";
const Footer = () => {
  return (
    <div>
      <section id="subsol">
        <div className="wave">
          <img className="img-fluid" src={Subsol} alt="Waveing" />
        </div>
      </section>

      <section id="footer" class="footer">
        <div className="rowfoot">
          <div className="downlogo">
            <img className="logoftr" src={logo2} alt="Visit Germany Logo" />
            <div className="socials">
              <a href="https:/facebook.com" alt="Facebook">
                <i className="social-icon fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" alt="Instagram">
                <i className="social-icon fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com" alt="Youtube">
                <i className="social-icon fa-brands fa-youtube"></i>
              </a>
              <a href="./#footer" alt="Email">
                <i className="social-icon fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="adminis">
            <h3>Content</h3>
            <p>
              <a href="./#sandbox" alt="Administration">
                Administration
              </a>
            </p>
            <p>
              <a href="./#politics" alt="Politics">
                German Politics
              </a>
            </p>
            <p>
              <a href="./#icons" alt="Food">
                Food in Germany
              </a>
            </p>
            <p>
              <a href="./#weather" alt="Weather">
                Weather and record
              </a>
            </p>
            <p>
              <a href="./#football" alt="Football">
                Football & Bundesliga
              </a>
            </p>
            <p>
              <a href="./#caruselos" alt="Gallery">
                Gallery
              </a>
            </p>
          </div>

          <div className="blogger">
            <h3>Blog</h3>
            <p>
              <a href="/" alt="Home page">
                Home
              </a>
            </p>
            <p>
              <a href="/bloguletz" alt="Blog">
                Blog page
              </a>
            </p>
            <p>
              <a href="/postare" alt="Post">
                Post page
              </a>
            </p>
            <p>
              <a href="/creditari" alt="Images attribution">
                Images attribution
              </a>
            </p>
          </div>

          <div className="contactinfo">
            <h3>Contact</h3>
            <p>
              <a href="https://facebook.com" alt="Facebook">
                Facebook
              </a>
            </p>
            <p>
              <a href="https://instagram.com" alt="Instagram">
                Instagram
              </a>
            </p>
            <p>
              <a href="https://youtube.com" alt="Youtube">
                Youtube
              </a>
            </p>
            <p>
              <a href="./#footer" alt="Email">
                Email
              </a>
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &#169; 2025 | Marius Ionescu</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
