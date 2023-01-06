import "../styles/style.css";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
let urlApi = "http://localhost:5000";

const OnlineManagement = () => {
  const { id } = useParams();
  console.log(id, "id");

  const [post, SetPost] = useState([]);

  useEffect(() => {
    console.log("id", id);
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/readmoreblog/${id}`,
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        );
        SetPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  console.log(post);

  return (
    <div>
      <section className="blog_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="term_sec-9">
                <img
                  src={urlApi + "/image/" + post?.data?.image}
                  className="blog_sec-img"
                />
                <div className="p-4">
                  <h2 className="blog_sec-h2 p-0">{post?.data?.title} </h2>
                  <div className="row">
                    <span className=" col-md-6 blog-span1  m-0">
                      {post?.data?.name}{" "}
                    </span>
                    <span className=" col-md-6 text-end  blog-span2 m-0">
                      September 08,2022
                    </span>
                  </div>
                  <p className="blog_sec-p p-0">{post?.data?.dec} </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 term_sec-3">
              <div className="block1">
                <form>
                  <p className="block_p">Search</p>
                  <input type="text" name="search" className="block_search" />
                  <button type="submit" className="block_btn">
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
                    Tips to write better content that gets you up in the night.
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
    </div>
  );
};

export default OnlineManagement;
