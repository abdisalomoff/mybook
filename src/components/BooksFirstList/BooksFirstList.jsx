import React, { useEffect } from "react";
import Book from "../Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slice/fetchDataSlice";
import "./BooksList.scss";
import Book1 from "../../assets/images/content.jpg";
import Loader from "../Loader/Loader";

const API_KEY = "AIzaSyCvcdVCjGW292ele-eHakp-jqbvfRai3Dc";
// const API_KEY = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";

const BooksFirstList = ({ selectedGenre }) => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  // console.log(dataState);
  
  useEffect(() => {
    const genreQuery = selectedGenre === "All" ? "" : `${selectedGenre}`;
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=${genreQuery}+inauthor:keyes&key=${API_KEY}&maxResults=40`
      )
    );
  }, [dispatch, selectedGenre]);

  if (loading || !dataState.data || !dataState.data.items) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const books = dataState.data.items.slice(0, 10).map((item) => ({
    id: item.id,
    image: item.volumeInfo?.imageLinks?.thumbnail || Book1,
    title: item.volumeInfo?.title,
    author: item.volumeInfo?.authors ? item.volumeInfo.authors[0] : "",
    rating: item.volumeInfo?.averageRating || 0,
    votes: item.volumeInfo?.ratingsCount || 0,
    description: item.volumeInfo?.description,
  }));

  return (
    <main>
      <h2 className="genre__title">Book by genre</h2>
      <ul className="books__list">
        {books.map((item, index) => (
          <li key={index}>
            <Book
              id={item.id}
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

export default BooksFirstList;
