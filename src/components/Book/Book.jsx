import React from "react";
import "./Book.scss";
import Stars from "../../assets/images/stars.svg";
import { Link } from "react-router-dom";

const Book = ({ id, image, title, author, rating, votes, description }) => {
  return (
    <Link to={`/book/${id}`} style={{ textDecoration: "none" }}>
      <div className="book">
        <img className="book__img" src={image} alt={title} />
        <div className="book__info">
          <h2 style={{ textAlign: "start" }}>{title.slice(0, 28)}</h2>
          <h3>by {author}</h3>
          <div className="book__info-rating">
            <img src={Stars} alt="stars" />
            <h5>{votes} votes</h5>
          </div>
          <p>{description?.slice(0, 80)}...</p>
          <a className="book-buy">Buy Now</a>
        </div>
      </div>
    </Link>
  );
};

export default Book;
