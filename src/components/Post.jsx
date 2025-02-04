import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Hero from "./Hero";
// import Icons from "./Icons";
// import Sandbox from "./Sandbox";
// import Optin from "./Optin";
import frankfurtmain from "../assets/images/blog-pics/Frankfurt_Main.jpg";

const Post = () => {
  return (
    <React.Fragment>
      <section id="postare">
        <div className="container" id="blogPost">
          <div className="row" id="blob">
            <div
              id="content"
              className="col-xs-12 col-sm-12 col-md-12 col-lg-8"
            >
              <article className="post">
                <header>
                  <h1>Blog title here</h1>
                  <div className="post-details">
                    <i className="fa fa-user"></i>
                    Marius Ionescu
                    <i className="fa fa-clock-o"></i>
                    <time>October 9, 2024</time>
                    <i className="fa fa-folder"></i>
                    <a href="/postare">Blog</a>, <a href="/postare">Travel</a>
                    <i className="fa fa-tags"></i>
                    Tagged <a href="/postare">Trips</a>,{" "}
                    <a href="/postare">best prices</a>,{" "}
                    <a href="/postare">best hotels</a>,{" "}
                    <a href="/postare">best flights</a>
                    <div className="post-comments-badge">
                      <a href="/postare">
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

                <div className="post-body">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Etiam porta sem
                    malesuada magna mollis euismod. Curabitur blandit tempus
                    porttitor. Aenean lacinia bibendum nulla sed consectetur.
                    Aenean lacinia bibendum nulla sed consectetur. Curabitur
                    blandit tempus porttitor.
                  </p>

                  <p>
                    Etiam porta sem malesuada magna mollis euismod. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vestibulum id ligula porta felis euismod semper. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Sed
                    posuere consectetur est at lobortis.
                  </p>

                  <h3>Subtitle</h3>
                  <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Aenean
                    lacinia bibendum nulla sed consectetur.
                  </p>

                  <h4>Another subtitle</h4>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Maecenas sed diam eget risus varius
                    blandit sit amet non magna. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem
                    nec elit. Etiam porta sem malesuada magna mollis euismod.
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit.
                  </p>
                </div>
              </article>

              <div id="comments">
                <div className="comments-wrap">
                  <h3>4 comments</h3>
                  <ol className="comments-list">
                    <li className="comment">
                      <h4>
                        George Tufis <small>&bull; October 9, 2024</small>
                      </h4>

                      <div className="comment-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <h4>
                            Cristian Marmota{" "}
                            <small>&bull; October 9, 2024</small>
                          </h4>
                          <div className="comment-body">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>

                          <ol className="children">
                            <li className="comment">
                              <h4>
                                Ionut Dolarescu{" "}
                                <small>&bull; October 9, 2024</small>
                              </h4>
                              <div className="comment-body">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only
                                  five centuries, but also the leap into
                                  electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s
                                  with the release of Letraset sheets containing
                                  Lorem Ipsum passages, and more recently with
                                  desktop publishing software like Aldus
                                  PageMaker including versions of Lorem Ipsum.
                                </p>
                              </div>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <h4>
                        Florin Tulburel <small>&bull; October 9, 2024</small>
                      </h4>
                      <div className="comment-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </li>
                  </ol>

                  <div id="leave-comment">
                    <h3>Leave a comment</h3>

                    <form>
                      <p>
                        Your email address will not be published. Required
                        fields are marked <span className="required">*</span>
                      </p>
                      <p className="comment-form-author">
                        <label htmlFor="author">Name *</label>
                        <input type="text" id="author" autocomplete="on" />
                      </p>
                      <p className="comment-form-email">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" autocomplete="on" />
                      </p>
                      <p className="comment-form-url">
                        <label htmlFor="url">Website</label>
                        <input type="url" id="url" autocomplete="on" />
                      </p>
                      <p className="comment-form-comment">
                        <label htmlFor="comment">Comment *</label>
                        <textarea id="comment"></textarea>
                      </p>
                      <p className="form-submit">
                        <input type="submit" name="sumbit" value="Submit" />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
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
                    <a href="/postare">Category #1</a>
                  </li>
                  <li>
                    <a href="/postare">Category #2</a>
                  </li>
                  <li>
                    <a href="/postare">Category #3</a>
                  </li>
                  <li>
                    <a href="/postare">Category #4</a>
                  </li>
                  <li>
                    <a href="/postare">Category #5</a>
                  </li>
                  <li>
                    <a href="/postare">Category #6</a>
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

export default Post;
