import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";

import ReactPaginate from "react-paginate";
import Link from "next/link";
import Head from "next/head";

const PER_PAGE = 4;
function author() {
  let urlApi = `${process.env.NEXT_PUBLIC_APIURL}`;
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_APIURL}/getAuthors`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json.data);
        setImages(json.data.sort().reverse());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="team_sec">
          <Head>
            <title>Authors - Get Pro Writer</title>

            <meta
              name="description"
              content="Meet the expertly-trained and certified professional writers on our team who are ready to transform your words into valuable content."
            />
            <meta
              name="robots"
              content="noindex, nofollow, max-image-preview:large"
            />
            <link rel="canonical" href="https://getprowriter.com/author/" />
            <meta name="generator" content="All in One SEO (AIOSEO) 4.2.3.1 " />
            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Get Pro Writer - Content That Brings Wow Reaction"
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Authors - Get Pro Writer" />
            <meta
              property="og:description"
              content="Meet the expertly-trained and certified professional writers on our team who are ready to transform your words into valuable content."
            />
            <meta
              property="og:url"
              content="https://getprowriter.com/author/"
            />
            <meta
              property="og:image"
              content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
            />
            <meta
              property="article:published_time"
              content="2022-01-10T16:07:29+00:00"
            />
            <meta
              property="article:modified_time"
              content="2022-01-11T06:39:04+00:00"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Authors - Get Pro Writer" />
            <meta
              name="twitter:description"
              content="Meet the expertly-trained and certified professional writers on our team who are ready to transform your words into valuable content."
            />
            <meta
              name="twitter:image"
              content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
            />
          </Head>
          <div className="container">
            <div className="row">
              <h2 className="team_sec-h2">Meet our Authors</h2>

              {images.slice(offset, offset + PER_PAGE).map((friend) => (
                <div className="col-md-3" key={friend._id}>
                  <div className="author_box p-4 text-center">
                    <img
                      src={urlApi + "/image/" + friend.image}
                      alt={friend.title}
                      className="author_sec-img m-0"
                    />
                    <h4 className="author_Sec-h2">{friend.title}</h4>
                    <RenderHTML HTML={friend.dec.slice(0, 50)} />

                    <Link href={`/author/${friend.slug}`}>
                      <button type="button" className="author-btn m-0">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}

              <nav aria-label="..." className="mt-5">
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  pageCount={pageCount}
                  onPageChange={handleClick}
                  pageRangeDisplayed={1}
                  containerClassName={"pagination page"}
                  renderOnZeroPageCount={null}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled "}
                  activeClassName={"pagination__link--active"}
                  // renderOnZeroPageCount={null}
                />
              </nav>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default author;
