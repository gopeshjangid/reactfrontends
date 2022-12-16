import '../styles/style.css'
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
let urlApi = "http://localhost:5000";

const ViewDetails = () => {
  const { id } = useParams();
  console.log(id, "id");

  const [post, SetPost] = useState([]);
  useEffect(() => {
    console.log("id", id);
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/getAuthor/${id}`
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
          <h2 className="team_sec-h2">Meet our Authors</h2>
          <p className="team_sec-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lor
          </p>

          <div className="row">
            <div className="container">
              <div className="col-md-4">
                <div className="author_box">
                  <img
                    src={urlApi + "/image/" + post?.data?.image}
                    className="author_sec-img"
                  />
                  <h4 className="author_Sec-h2">{post?.data?.title}</h4>
                  <p className="author_Sec-p">{post?.data?.dec}</p>
                  <p className="author_Sec-p">{post?.data?.longDec}</p>
                </div>
              </div>
              <div className="col-md-8">
                <h1 className="author_Sec-h2 text-start display-4u">
                  {post?.data?.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
