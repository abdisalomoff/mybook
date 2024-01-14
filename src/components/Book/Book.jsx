import React from "react";
import "./Book.scss"
import Stars from "../../assets/images/stars.svg";
import { Link } from "react-router-dom";

const Book = ({image, title, author, rating, votes, description }) => {
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <p>
          {description.map((item, index) => (
            <span key={index}>
              {item.length > 80 ? item.slice(0, 80) + "..." : item}
              <br />
            </span>
          ))}
        </p>
      );
    } else if (description) {
      return <p>{description.length > 80 ? description.slice(0, 80) + "..." : description}</p>;
    } else {
      return null; // Agar description undefined bo'lsa, null qaytarish
    }
  };

  const renderLimitedTitle = (title) => {
    if (title && title.length > 10) {
      return title.slice(0, 30) + "";
    }
    return title;
  };


  return (
    <Link style={{ textDecoration: "none" }}>
      <div className="book">
        <img className="book__img" src={image} alt={title} />
        <div className="book__info">
          <h2 style={{ textAlign: "start" }}>{renderLimitedTitle(title)}</h2>
          <h3>by {author}</h3>
          <div className="book__info-rating">
            <img src={Stars} alt="stars" />
            <h5>{votes} votes</h5>
          </div>
          {renderDescription()}
          <a className="book-buy">Buy Now</a>
        </div>
      </div>
    </Link>
  );
};

export default Book;
