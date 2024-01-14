import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ onGenreChange, onRecomendationClick  }) => {
  const genres = [
    "All",
    "Business",
    "Apple",
    "Fiction",
    "Philosophy",
    "Biography",
    "Technology",
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
    onRecomendationClick(rec);
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
            <NavLink className="item" onClick={() => handleRecomendationClick(item.link)}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
