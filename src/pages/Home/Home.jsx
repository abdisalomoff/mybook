import React, { useState, useEffect } from "react";
import BooksFirstList from "../../components/BooksFirstList/BooksFirstList";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import CarouselComponent from "../../components/BooksFirstList/CarouselComponent";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  const [selectedRecomendation, setSelectedRecomendation] = useState("");

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleRecomendationClick = (rec) => {
    setSelectedRecomendation(rec);
  };

  const title = `read and add your insight`;
  const subtitle = "find your favorite book and read it here for free";

  return (
    <>
      <Hero title={title} subtitle={subtitle} />
      <section className="books">
        <div className="container books-wrapper">
          <Sidebar
            onGenreChange={handleGenreChange}
            onRecomendationClick={handleRecomendationClick}
          />
          <div className="books__components">
            <BooksFirstList selectedGenre={selectedGenre} />
            <CarouselComponent selectedRecomendation={selectedRecomendation} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
