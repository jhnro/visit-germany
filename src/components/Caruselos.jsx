import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Bridge from "../assets/images/carousel-cities/Berlin_Germany_view_from_the_bridge.jpg";
import Amazone from "../assets/images/carousel-cities/Berlin_Kiss_1841_Amazone_am_Alten_Museum.jpg";
import Potsdamer from "../assets/images/carousel-cities/Berlin_Potsdamer_Platz.jpg";
import Rathaus from "../assets/images/carousel-cities/Berlin_The_Rotes_Rathaus_with_the_Neptunbrunnen.jpg";
import Commerzbank from "../assets/images/carousel-cities/Frankfurt_Am_Main_Commerzbank.jpg";
import FBC from "../assets/images/carousel-cities/Frankfurt_FBC.jpg";
import Four from "../assets/images/carousel-cities/Frankfurt_Four_I.jpg";
import Frankfurt from "../assets/images/carousel-cities/Frankfurt_Main.jpg";
import Omniturm from "../assets/images/carousel-cities/Frankfurt_Omniturm.jpg";
import Trianon from "../assets/images/carousel-cities/Frankfurt_Trianon.Sud.jpg";
import BMW from "../assets/images/carousel-cities/Munchen_4_Cilindros_Munich_Germany.jpg";
import Marienplatz from "../assets/images/carousel-cities/Munchen_Stadtbild.jpg";
import Mercedes from "../assets/images/carousel-cities/Stuttgart_Mercedes_Benz_Museum.jpg";
import Schlossplatz from "../assets/images/carousel-cities/Stuttgart_Neues_Schloss_Schlossplatzspringbrunnen.jpg";
const Caruselos = () => {
  return (
    <section id="caruselos">
      <div className="container">
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel carousel-dark slide d-none d-lg-block"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Bridge}
                      alt="Berlin Bridge"
                    />
                    <p>
                      <small>View from Berlin Bridge</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Amazone}
                      alt="Berlin Amazone"
                    />
                    <p>
                      <small>Amazone am Alten Museum in Berlin</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Potsdamer}
                      alt="Berlin Potsdamer"
                    />
                    <p>
                      <small>Berlin Potsdamer</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Rathaus}
                      alt="Berlin Rotes Rathaus"
                    />
                    <p>
                      <snall>Berlin Rotes Rathaus</snall>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Commerzbank}
                      alt="Frankfurt Commerzbank"
                    />
                    <p>
                      <small>Frankfurt Commerzbank</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={FBC}
                      alt="Frankfurt FBC"
                    />
                    <p>
                      <small>Frankfurt FBC</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Four}
                      alt="Frankfurt Four I"
                    />
                    <p>
                      <small>Frankfurt Four I</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Frankfurt}
                      alt="Frankfurt am Main"
                    />
                    <p>
                      <small>Frankfurt am Main</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Omniturm}
                      alt="Frankfurt Omniturm"
                    />
                    <p>
                      <small>Frankfurt Omniturm</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Trianon}
                      alt="Frankfurt Trianon Sud"
                    />
                    <p>
                      <small>Frankfurt Trianon Sud</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={BMW}
                      alt="BMW Museum in Munchen"
                    />
                    <p>
                      <small>BMW Museum in Munchen</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Marienplatz}
                      alt="Munchen MarienPlatz"
                    />
                    <p>
                      <small>Munchen MarienPlatz</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Mercedes}
                      alt="Mercedes-Benz Museum"
                    />
                    <p>
                      <small>Mercedes-Benz Museum in Stuttgart</small>
                    </p>
                  </div>
                  <div className="col-lg-6 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Schlossplatz}
                      alt="Stuttgart Schlossplatz"
                    />
                    <p>
                      <small>Stuttgart Schlossplatzspringbrunnen</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>

          <div
            id="carouselExampleControlsSmallScreen"
            className="carousel carousel-dark slide d-md-block d-lg-none"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Bridge}
                      alt="Berlin Bridge"
                    />
                    <p>
                      <small>View from Berlin Bridge</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Amazone}
                      alt="Berlin Amazone"
                    />
                    <p>
                      <small>Amazone am Alten Museum in Berlin</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Potsdamer}
                      alt="Berlin Potsdamer"
                    />
                    <p>
                      <small>Berlin Potsdamer Platz</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Rathaus}
                      alt="Berlin Rotes Rathaus"
                    />
                    <p>
                      <small>Berlin Rotes Rathaus</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Commerzbank}
                      alt="Frankfurt Commerzbank"
                    />
                    <p>
                      <small>Frankfurt Commerzbank</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={FBC}
                      alt="Frankfurt FBC"
                    />
                    <p>
                      <small>Frankfurt FBC</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Four}
                      alt="Frankfurt Four I"
                    />
                    <p>
                      <small>Frankfurt Four I</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Frankfurt}
                      alt="Frankfurt am Main"
                    />
                    <p>
                      <small>Frankfurt am Main</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Omniturm}
                      alt="Frankfurt Omniturm"
                    />
                    <p>
                      <small>Frankfurt Omniturm</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Trianon}
                      alt="Frankfurt Trianon Sud"
                    />
                    <p>
                      <small>Frankfurt Trianon Sud</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={BMW}
                      alt="Munchen BMW Museum"
                    />
                    <p>
                      <small>BMW Museum in Munchen</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Marienplatz}
                      alt="Munchen Marienplatz"
                    />
                    <p>
                      <small>Munchen Marienplatz</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Mercedes}
                      alt="Stuttgart Mercedes Benz Museum"
                    />
                    <p>
                      <small>Mercedes-Benz Museum in Stuttgart</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12 onecol">
                    <img
                      className="d-inline-block w-100"
                      src={Schlossplatz}
                      alt="Stuttgart Schlossplatz"
                    />
                    <p>
                      <small>Stuttgart Schlossplatzspringbrunnen</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleControlsSmallScreen"
              role="button"
              data-bs-target="#carouselExampleControlsSmallScreen"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControlsSmallScreen"
              role="button"
              data-bs-target="#carouselExampleControlsSmallScreen"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caruselos;
