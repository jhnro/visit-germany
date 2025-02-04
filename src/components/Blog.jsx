import React from "react";
// import { Routes, Route, Link } from "react-router-dom";

import berlinbridge from "../assets/images/blog-pics/Berlin_Germany_view_from_the_bridge.jpg";
import frankfurtmain from "../assets/images/blog-pics/Frankfurt_Main.jpg";
import bmwhead from "../assets/images/blog-pics/Munchen_4_Cilindros_Munich_Germany.jpg";

const Blog = () => {
  return (
    <React.Fragment>
      <section id="bloguletz">
        {/* Main */}
        <div className="container">
          <div className="row" id="blob">
            <main
              id="content"
              className="col-xs-12 col-sm-12 col-md-12 col-lg-8"
              role="main"
            >
              <article className="post">
                <header>
                  <h3>
                    <a href="/postare">Blog title here</a>
                  </h3>
                  <div className="post-details">
                    <i className="fa fa-user"></i>
                    Marius Ionescu
                    <i className="fa fa-clock-o"></i>
                    <time>October 9, 2024</time>
                    <i className="fa fa-folder"></i>
                    <a href="/bloguletz">Blog</a>,{" "}
                    <a href="/bloguletz">Visit Germany</a>
                    <i className="fa fa-tags"></i>
                    Tagged <a href="/bloguletz">Trips</a>,{" "}
                    <a href="/bloguletz">best prices</a>,{" "}
                    <a href="/bloguletz">best hotels</a>,{" "}
                    <a href="/bloguletz">best flights</a>
                    <div className="post-comments-badge">
                      <a href="/bloguletz">
                        <i className="fa fa-comments"></i> 12
                      </a>
                    </div>
                  </div>
                </header>
                <div className="post-image">
                  <img
                    className="img-fluid"
                    src={berlinbridge}
                    alt="Berlin Bridge"
                  />
                </div>
                <div className="post-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt...{" "}
                    <a href="/postare">continue reading &raquo;</a>
                  </p>
                </div>
              </article>

              <article className="post">
                <header>
                  <h3>
                    <a href="/postare">Blog title here</a>
                  </h3>
                  <div className="post-details">
                    <i className="fa fa-user"></i>
                    Marius Ionescu
                    <i className="fa fa-clock-o"></i>
                    <time>October 9, 2024</time>
                    <i className="fa fa-folder"></i>
                    <a href="/bloguletz">Blog</a>,{" "}
                    <a href="/bloguletz">Visit Germany</a>
                    <i className="fa fa-tags"></i>
                    Tagged <a href="/bloguletz">Trips</a>,{" "}
                    <a href="/bloguletz">best prices</a>,{" "}
                    <a href="/bloguletz">best hotels</a>,{" "}
                    <a href="/bloguletz">best flights</a>
                    <div className="post-comments-badge">
                      <a href="/bloguletz">
                        <i className="fa fa-comments"></i> 14
                      </a>
                    </div>
                  </div>
                </header>
                <div className="post-image">
                  <img
                    className="img-fluid"
                    src={frankfurtmain}
                    alt="Frankfurt am Main"
                  />
                </div>
                <div className="post-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt...{" "}
                    <a href="/postare">continue reading &raquo;</a>
                  </p>
                </div>
              </article>

              <article className="post">
                <header>
                  <h3>
                    <a href="/postare">Blog title here</a>
                  </h3>
                  <div className="post-details">
                    <i className="fa fa-user"></i>
                    Marius Ionescu
                    <i className="fa fa-clock-o"></i>
                    <time>October 9, 2024</time>
                    <i className="fa fa-folder"></i>
                    <a href="/bloguletz">Blog</a>,{" "}
                    <a href="/bloguletz">Visit Germany</a>
                    <i className="fa fa-tags"></i>
                    Tagged <a href="/bloguletz">Trips</a>,{" "}
                    <a href="/bloguletz">best prices</a>,{" "}
                    <a href="/bloguletz">best hotels</a>,{" "}
                    <a href="/bloguletz">best flights</a>
                    <div className="post-comments-badge">
                      <a href="/bloguletz">
                        <i className="fa fa-comments"></i> 8
                      </a>
                    </div>
                  </div>
                </header>
                <div className="post-image">
                  <img
                    className="img-fluid"
                    src={bmwhead}
                    alt="BMW Headquaters"
                  />
                </div>
                <div className="post-excerpt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt...{" "}
                    <a href="/postare">continue reading &raquo;</a>
                  </p>
                </div>
              </article>
            </main>

            {/* Sidebar */}
            <aside className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="widget">
                <h4>Join our Mailing List</h4>
                <p>
                  Keep up-to-date with the latest news and you'll
                  <strong>be the first to get the offer</strong>
                </p>
                <button
                  className="btn btn-success btn-lg btn-block"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Newsletter
                </button>
              </div>

              <div className="widget">
                <form role="search" className="search-form">
                  <label htmlFor="sidebar-search" className="visually-hidden">
                    Search the blog
                  </label>
                  <input
                    type="text"
                    id="sidebar-search"
                    placeholder="Search the blog..."
                  />
                </form>
              </div>

              <div className="widget">
                <h4>Your vacation starts with us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="widget">
                <h4>Recent Posts</h4>
                <ul>
                  <li>
                    <a href="/postare">Blog post #1</a>
                  </li>
                  <li>
                    <a href="/postare">Blog post #2</a>
                  </li>
                  <li>
                    <a href="/postare">Blog post #3</a>
                  </li>
                  <li>
                    <a href="/postare">Blog post #4</a>
                  </li>
                  <li>
                    <a href="/postare">Blog post #5</a>
                  </li>
                </ul>
              </div>

              <div className="widget">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <a href="/bloguletz">Category #1</a>
                  </li>
                  <li>
                    <a href="bloguletz">Category #2</a>
                  </li>
                  <li>
                    <a href="bloguletz">Category #3</a>
                  </li>
                  <li>
                    <a href="bloguletz">Category #4</a>
                  </li>
                  <li>
                    <a href="bloguletz">Category #5</a>
                  </li>
                  <li>
                    <a href="bloguletz">Category #6</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blog;
