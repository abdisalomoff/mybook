import React, { useState, useEffect } from "react";
import BooksFirstList from "../../components/BooksFirstList/BooksFirstList";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import HeroBg from "../../assets/images/hero-bg.png"
const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("All genres");
  // const [selectedRecomendation, setSelectedRecomendation] = useState("");

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  // const handleRecomendationChange = (rec) => {
  //   setSelectedRecomendation(rec);
  // };

  const title = `read and add your insight`;
  const subtitle = "find your favorite book and read it here for free";

  return (
    <>
      <Hero title={title} bg={HeroBg} subtitle={subtitle} />
      <section className="books">
        <div className="container books-wrapper">
          <Sidebar
            onGenreChange={handleGenreChange}
            // onRecomendationChange={handleRecomendationChange}
          />
          <div className="books__components">
            <BooksFirstList selectedGenre={selectedGenre} />
            {/* <CarouselComponent /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;