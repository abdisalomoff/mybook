import React from "react";
import "./NewsCard.scss";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <Link to={`/blog/${article?.id}`} style={{textDecoration:'none'}}>
      <div className="article">
        <img src={article?.imageUrl} alt={article?.title} />
        <div className="article__info">
          <h2>{article?.title}</h2>
          <p>{article?.summary.slice(0, 110)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
