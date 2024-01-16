import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NewsList.scss";
import { fetchData } from "../../slice/fetchDataSlice";
import NewsCard from "./NewsCard";
import Loader from "../Loader/Loader";

const NewsList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data?.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(fetchData("https://api.spaceflightnewsapi.net/v3/articles"));
  }, [dispatch]);
  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error occurred</p>;
  }
  console.log(data);
  return (
    <div className="news">
      <div className="container">
        <div className="news__card">
          {Array.isArray(data)
            ? data.slice(0,9).map((article, index) => (
                <NewsCard key={index} article={article} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
