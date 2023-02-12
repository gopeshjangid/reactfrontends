// import DOMPurify from "dompurify";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import env from "react-dotenv";
import Loader from "./Loader";
let urlApi = `${process.env.REACT_APP_APIURL}`;

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      searchText: "",
      startSearch: false,
      isLoading: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${process.env.REACT_APP_APIURL}/getBlog`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        const User = await response.json();
        if (response.ok) {
          console.log(User);
          this.setState({ ...this.state, User: User.data, isLoading: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { User } = this.state;
    const RenderHTML = (props) => (
      <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
    );

    if (User.length < 0) {
      return User.length > 0;
    }
    console.log("this.props.User", this.state.User);

    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <section className="blog_sec">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  {this.state.User && this.state.searchText
                    ? this.state.User.filter((item, index) =>
                        item.title.includes(this.state.searchText)
                      ).map((friend, value) => {
                        return (
                          <div className="term_sec-9">
                            <img
                              src={urlApi + "/image/" + friend.image}
                              className="blog_sec-img"
                            />
                            <div className="p-4">
                              <h2 className="blog_sec-h2 p-0">
                                {friend.title}{" "}
                              </h2>
                              <div className="row">
                                <span className=" col-md-6 blog-span1 m-0">
                                  {friend.name}{" "}
                                </span>{" "}
                                <span className="  col-md-6 text-end blog-span2">
                                  September 08,2022
                                </span>
                              </div>
                              <RenderHTML HTML={friend.dec} />

                              <button type="button" className="blog_sec-btn">
                                Read More{" "}
                              </button>
                            </div>
                          </div>
                        );
                      })
                    : this.state.User.map((friend, value) => {
                        return (
                          <div className="term_sec-9" key={friend._id}>
                            <img
                              src={urlApi + "/image/" + friend.image}
                              className="blog_sec-img"
                            />
                            <div className="p-4">
                              <h2 className="blog_sec-h2 p-0">
                                {friend.title}{" "}
                              </h2>
                              <div className="row">
                                <span className=" col-md-6 blog-span1  m-0">
                                  {friend.name}{" "}
                                </span>{" "}
                                <span className=" col-md-6 text-end  blog-span2 m-0">
                                  September 08,2022
                                </span>
                              </div>

                              <RenderHTML HTML={friend.dec} />
                              <Link to={`/onlineManagement/${friend._id}`}>
                                <button
                                  type="button"
                                  className="blog_sec-btn m-0"
                                >
                                  Read More{" "}
                                </button>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                </div>

                <div className="col-md-3 term_sec-3">
                  <div className="block1">
                    <form>
                      <p className="block_p">Search</p>
                      <input
                        type="text"
                        name="search"
                        value={this.state.searchText}
                        onChange={(e) =>
                          this.setState({
                            ...this.state,
                            searchText: e.target.value,
                          })
                        }
                        className="block_search"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({ ...this.state, startSearch: true })
                        }
                        className="block_btn"
                      >
                        search
                      </button>
                    </form>
                  </div>

                  <div className="block1">
                    <h3 className="block-h3">Recent Posts</h3>
                    <p className="block-p2">
                      <Link to="" className="block_a">
                        Online Reputation Management
                      </Link>
                    </p>
                    <p className="block-p2">
                      <Link to="" className="block_a">
                        Marketing research case analysis of Google search engine
                      </Link>
                    </p>
                    <p className="block-p2">
                      <Link to="" className="block_a">
                        A 5-Step Guide to Protecting Your Health and Well-Being
                        While Working from Home
                      </Link>
                    </p>

                    <p className="block-p2">
                      <Link to="" className="block_a">
                        The Art of Content Writing
                      </Link>
                    </p>
                    <p className="block-p2">
                      <Link to="" className="block_a">
                        Tips to write better content that gets you up in the
                        night.
                      </Link>
                    </p>
                  </div>

                  <div className="block1">
                    <h3 className="block-h3">Recent Comments</h3>
                    <p className="block-p3">No comments to show.</p>
                  </div>

                  <div className="block1">
                    <h3 className="block-h3">Archives</h3>
                    <p className="block-p3">February 2022</p>
                    <p className="block-p3">January 2022</p>
                    <p className="block-p3">December 2021</p>
                  </div>

                  <div className="block1">
                    <h3 className="block-h3">Categories</h3>
                    <p className="block-p3">Content Writing</p>
                    <p className="block-p3">General</p>
                    <p className="block-p3">Tips</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Blog;
