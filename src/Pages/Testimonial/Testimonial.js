import React, { useEffect, useState } from "react";
import HeaderNavbar from "../Shared/Header/HeaderNavbar/HeaderNavbar";
import ReactPaginate from "react-paginate";
import "./Testimonial.css";
import JsonData from "./testimonial.json";
import Footer from "../Shared/Footer/Footer";
import Breadcrumbs from "../ServiceDetailsList/BreadcrumbSL/Breadcrumbs";

const Testimonial = () => {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=google-news-uk&apiKey=146c224ec0614ff9bda74183f2e56bf8";
  const [latestNews, setlatestNews] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setlatestNews(data.articles);
      });
  }, []);
  const [testimonials, setTestimonials] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const testimonialsPerPage = 5;
  const pagesVisited = pageNumber * testimonialsPerPage;

  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <HeaderNavbar />

      <Breadcrumbs breadcrumb={{ pagename: "Testimonials" }} />
      <section
        id="main-testimonial"
        className="main-testimonial  dark:bg-dark-variant"
      >
        <div className="container news-posts">
          <div className="row-testimonial">
            <section className="col-sm-8 col-md-9 col-xs-12 " id="content">
              {testimonials
                .slice(pagesVisited, pagesVisited + testimonialsPerPage)
                .map((testimonial) => {
                  return (
                    <>
                      <blockquote className="testimonial-post dark:bg-slate-900">
                        <span>
                          <i className="fa fa-quote-left"></i>
                        </span>
                        <q>{testimonial.quote}</q>
                        <footer>
                          <cite title="Source Title">
                            <a href="google.com" className="alignleft">
                              <span data-picture data-alt="image description">
                                <span
                                  data-src="http://placehold.it/58x54"
                                  data-width="58"
                                  data-height="54"
                                ></span>
                                <span
                                  data-src="http://placehold.it/58x54"
                                  data-width="58"
                                  data-height="54"
                                  data-media="(-webkit-min-device-pixel-ratio:1.5), (min-resolution:1.5dppx)"
                                ></span>

                                <span data-src="http://placehold.it/58x54"></span>

                                <img
                                  src={testimonial.image}
                                  width="58"
                                  height="54"
                                  alt="profile"
                                />
                              </span>
                            </a>
                            <a href="instagram.com">
                              {testimonial.name}
                              <br />
                              {testimonial.designation}
                            </a>
                          </cite>
                        </footer>
                      </blockquote>
                    </>
                  );
                })}
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </section>
            {/* <aside className="col-sm-4 col-md-3-latestpost col-xs-12" id="sidebar">
                            <nav className="widget-latestpost latest-widget dark:bg-slate-900">
                                <h2 className='dark:bg-slate-900 dark:text-white'>lATEST Posts</h2>
                                <ul className="latest-post-nav list-unstyled">
                                    <li>
                                        <a href={latestNews[0]?.url} target='_blank' rel="noreferrer">{latestNews[0]?.title}</a>
                                        <time dateTime="2015-01-01">{new Date(latestNews[0]?.publishedAt).toLocaleString()}</time>
                                    </li>
                                    <li>
                                        <a href={latestNews[1]?.url} target='_blank' rel="noreferrer">{latestNews[1]?.title}</a>
                                        <time dateTime="2015-01-01">{new Date(latestNews[1]?.publishedAt).toLocaleString()}</time>
                                    </li>
                                    <li>
                                        <a href={latestNews[2]?.url} target='_blank' rel="noreferrer">{latestNews[2]?.title}</a>
                                        <time dateTime="2015-01-01">{new Date(latestNews[2]?.publishedAt).toLocaleString()}</time>
                                    </li>
                                </ul>
                            </nav>
                        </aside> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimonial;
