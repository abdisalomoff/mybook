import React, { useEffect } from "react";
import Book from "../Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slice/fetchDataSlice";
import "./BooksList.scss"
import Book1 from "../../assets/images/content.jpg";


// const API_KEY = "AIzaSyCvcdVCjGW292ele-eHakp-jqbvfRai3Dc";
const API_KEY = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";

const CarouselComponent = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data);
  // console.log(dataState);

  useEffect(() => {
    dispatch(fetchData(`https://www.googleapis.com/books/v1/volumes?q=computer&orderBy=newest&key=${API_KEY}`));
    
  }, [dispatch]);

  if (!dataState.data || !dataState.data.items) {
    return <p></p>;
  }

  const books = dataState.data.items.slice(-6).map((item) => ({
    image: item.volumeInfo?.imageLinks?.thumbnail || Book1,
    title: item.volumeInfo?.title,
    author: item.volumeInfo?.authors ? item.volumeInfo.authors[0] : "",
    rating: item.volumeInfo?.averageRating || 0,
    votes: item.volumeInfo?.ratingsCount || 0,
    description: item.volumeInfo?.description,
  }));

  return (
    <main>
      <h2 className="genre__title second__list">Book by genre</h2>
      <ul className="books__list">
        {books.map((item, index) => (
          <li key={index}>
            <Book
              image={item.image}
              title={item.title}
              author={item.author}
              rating={item.rating}
              votes={item.votes}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CarouselComponent;
