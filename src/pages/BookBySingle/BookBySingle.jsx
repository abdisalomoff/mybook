import React, { useEffect } from "react";
import "./BookBySingle.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slice/fetchDataSlice";
import BlackStars from "../../assets/icons/black-stars.svg";
import { IoMdArrowBack } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const API_KEY = "AIzaSyCvcdVCjGW292ele-eHakp-jqbvfRai3Dc";
// const API_KEY = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";

const BookBySingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
      )
    );
  }, [dispatch, id]);

  console.log(data);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <main className="bookby">
        <div className="container">
          <div className="bookby-inner">
            <div className="single__book">
              <Link to="/">
                <button className="single__book-backtbn">
                  <IoMdArrowBack size={50} color="orange" />
                </button>
              </Link>
              <div className="single__book-card">
                <img
                  className="single__book-img"
                  src={data?.volumeInfo?.imageLinks?.thumbnail}
                  alt={data?.volumeInfo?.title}
                />
                <div className="single__book-about">
                  <h1 className="single__book-title">
                    {data?.volumeInfo?.title}
                  </h1>
                  <div className="single__book-title-data">
                    <p>{data?.volumeInfo?.authors?.[0]}</p>
                    <p className="singlie__book-published">
                      {data?.volumeInfo?.publishedDate}
                    </p>
                  </div>
                  <img src={BlackStars} alt="stars" />
                  <div
                    className="single__book-title-data"
                    style={{ marginTop: "25px" }}
                  >
                    <p>{data?.volumeInfo?.printedPageCount} Read</p>
                    <p>{data?.volumeInfo?.printedPageCount - 175} Votes</p>
                  </div>
                  <p className="single__book-subtitle">
                    {data?.volumeInfo?.subtitle}
                  </p>
                  <div className="single__book-buttons">
                    <a className="single__book-buy" href="#">
                      Buy Now
                    </a>
                    <a className="single__book-read" href="#">
                      Read Book
                    </a>
                  </div>
                </div>
              </div>
              <div className="single__book-body">
                <h2 className="single__book-description-title">Description</h2>
                <p
                  className="single__book-description"
                  dangerouslySetInnerHTML={{
                    __html: data?.volumeInfo?.description,
                  }}
                />
                <ul className="single__book-genres">
                  <li className="single__book-genre">
                    <a className="single__book-genre-link" href="#">
                      Biografi
                    </a>
                  </li>
                  <li className="single__book-genre">
                    <a className="single__book-genre-link" href="#">
                      AutoBiografi
                    </a>
                  </li>
                  <li className="single__book-genre">
                    <a className="single__book-genre-link" href="#">
                      Memoar
                    </a>
                  </li>
                </ul>
                <h3 className="single__book-info">Book's information</h3>
                <ul className="single__book-info-list">
                  <li className="single__book-info-list-title">
                    <p>Language</p>
                    <span>{data?.volumeInfo?.language}</span>
                  </li>
                  <li className="single__book-info-list-title">
                    <p>Publisher</p>
                    <span>{data?.volumeInfo?.publisher}</span>
                  </li>
                  <li className="single__book-info-list-title">
                    <p>Categories</p>
                    <span>{data?.volumeInfo?.categories}</span>
                  </li>
                </ul>
                <a className="single__book-see-comment" href="#">
                  See Comment
                </a>
              </div>
            </div>
            <div className="single__book-right"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookBySingle;
