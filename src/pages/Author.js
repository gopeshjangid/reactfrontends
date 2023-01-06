import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import axios from 'axios';

import React, { Component } from "react";
let urlApi = "http://localhost:5000";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    fetch("http://localhost:5000/getAuthors", {
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
          this.setState({ ...this.state, User: User.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const pagination = {
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     },
  //   };

  render() {
    const { User } = this.state;

    if (User.length < 0) {
      return User.length > 0;
    }
    console.log("this.props.User", this.state.User);

    return (
      <section className="team_sec">
        <div className="container">
          <div className="row">
            <h2 className="team_sec-h2">Meet our Authors</h2>
            <p className="team_sec-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lor
            </p>
            <Swiper
              freeMode={true}
              // loop={true}

              grabCursor={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
            >
              {this.state.User.map((friend) => {
                return (
                  <div className="col-md-3" key={friend._id}>
                    <SwiperSlide>
                      <div className="author_box p-4 text-center">
                        <img
                          src={urlApi + "/image/" + friend.image}
                          className="author_sec-img m-0"
                        />
                        <h4 className="author_Sec-h2">{friend.title}</h4>
                        <p className="author_Sec-p">{friend.dec}</p>

                        <Link to={`/viewdetails/${friend._id}`}>
                          <button type="button" className="author-btn m-0">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>

            <nav aria-label="..." className="mt-5">
              <ul className="pagination">
                <li className="page-item disabled">
                  <Link className="page-link" to="" tabIndex="-1">
                    Previous
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    1
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="">
                    2 <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Author;
