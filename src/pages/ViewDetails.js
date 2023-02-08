import "../styles/style.css";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";
let urlApi = `${env.REACT_APP_APIURL}`;

const ViewDetails = () => {
  const { id } = useParams();
  console.log(id, "id");

  const [post, SetPost] = useState([]);
  useEffect(() => {
    console.log("id", id);
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `${env.REACT_APP_APIURL}/getAuthor/${id}`
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
    <section className="team_sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="author_box p-3 text-center"
              style={{ border: "1px solid #029A99" }}
            >
              <img
                src={urlApi + "/image/" + post?.data?.image}
                className="author_sec-img ms-0"
                style={{ border: "5px solid #029A99" }}
              />
              <h4 className="author_Sec-h2 fs-2">{post?.data?.title}</h4>
              <br />
              <p className="author_Sec-p fs-4">
                Designation:{" "}
                <span className="text-dark">{post?.data?.dec}</span>
              </p>
              <p className="author_Sec-p ">{post?.data?.longDec}</p>
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="author_Sec-h2 article  text-start ">
              Articles by {post?.data?.title}
            </h2>
            <p className="author_Sec-p text-start fs-6 mt-4">
              Sorry there is no article found for this author....!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
