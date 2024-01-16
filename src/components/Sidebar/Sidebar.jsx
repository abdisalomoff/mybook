import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ onGenreChange, onRecomendationChange}) => {
  const genres = [
    "All",
    "Business",
    "Fiction",
    "Philosophy",
    "Biography",
    "Technology",
    "Horror",
    "Thriller",
    "Fantasy",
    "Romance"
  ];

  const handleGenreClick = (genre) => {
    onGenreChange(genre);
  };

  const recomendations = [
    { title: "Artist of the Month", link: "artist" },
    { title: "Book of the Year", link: "book" },
    { title: "Top Genre", link: "genre" },
    { title: "Trending", link: "trending" },
  ];

  const handleRecomendationClick = (rec) => {
    onRecomendationChange(rec);
  };


  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Book by Genre</h2>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>
            <NavLink className="item" onClick={() => handleGenreClick(genre)}>
              {genre}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar__line"></div>
      <h2 className="sidebar__recomendations">Recomendations</h2>
      <ul>
        {recomendations.map((item, index) => (
          <li key={index}>
            <NavLink className="item" onClick={() => handleRecomendationClick(rec)}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
