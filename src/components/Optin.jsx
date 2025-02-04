import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Optin = () => {
  return (
    <section id="optin">
      <div id="optin2">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <p className="lead">
                <strong>Subscribe to our mailing list.</strong> We'll send
                something special as a thank you.
              </p>
            </div>

            <div className="col-sm-4">
              <button
                className="btn btn-success btn-lg btn-block"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Get the Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-bs-dismiss="modal">
                <span aria-hidden="true">&times;</span>
                <span className="visually-hidden">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                &nbsp;&nbsp;&nbsp;<i className="fa fa-envelope newsletter"></i>{" "}
                Subscribe to Newsletter
              </h4>
            </div>

            <div className="modal-body">
              <p>
                Simply enter your name and email! As a thank you for joining us,
                we're going to give you one of our best travel guides,{" "}
                <em>for free!</em>
              </p>

              <form className="form-inline">
                <div className="form-group">
                  <label className="sr-only" htmlFor="subscribe-name">
                    Your first name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subscribe-name"
                    placeholder="Your first name"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="subscribe-email">
                    and your email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subscribe-email"
                    placeholder="and your email"
                  />
                </div>
                <br />
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Subscribe!"
                />
              </form>

              <hr />

              <p>
                <small>
                  By providing your email you consent to receiving occasional
                  promotional emails &amp; newsletters. <br />
                  No Spam. Just good stuff. We respect your privacy &amp; you
                  may unsubscribe at any time.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optin;
