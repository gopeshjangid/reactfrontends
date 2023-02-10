import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

let urlApi = "http://localhost:5000";
const PER_PAGE = 4;
function Author() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  function handleClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  //0, 4, 8, 12

  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);
  const RenderHTML = (props) => (
    <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
  );

  const pageCount = Math.ceil(images.length / PER_PAGE);

  useEffect(() => {
    fetch("http://localhost:5000/getAuthors", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json.data);
        setImages(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="team_sec">
      <div className="container">
        <div className="row">
          <h2 className="team_sec-h2">Meet our Authors</h2>
          <p className="team_sec-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lor
          </p>

          {images.slice(offset, offset + PER_PAGE).map((friend) => (
            <div className="col-md-3" key={friend._id}>
              <div className="author_box p-4 text-center">
                <img
                  src={urlApi + "/image/" + friend.image}
                  alt={"title" + friend.title}
                  className="author_sec-img m-0"
                />
                <h4 className="author_Sec-h2">{friend.title}</h4>
                <RenderHTML HTML={friend.dec} />

                <Link to={`/viewdetails/${friend._id}`}>
                  <button type="button" className="author-btn m-0">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}

          <nav aria-label="..." className="mt-5">
            <ReactPaginate
              previousLabel="< previous"
              nextLabel="next >"
              pageCount={pageCount}
              onPageChange={handleClick}
              pageRangeDisplayed={1}
              containerClassName={"pagination page"}
              renderOnZeroPageCount={null}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={".pagination__link--disabled "}
              activeClassName={"pagination__link--active"}
              // renderOnZeroPageCount={null}
            />
          </nav>
        </div>
      </div>
    </section>
  );
}
export default Author;
