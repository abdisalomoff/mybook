import Header from "../Header/Header";
import "./Hero.scss"
import Search from "../../assets/icons/search.svg"

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero-wrapper">
      <div className="container">
      <Header />
      <div>
        <div className="hero">
          <h1 className="hero__title">{title}</h1>
          <h3 className="hero__subtitle">{subtitle}</h3>
          <form className="hero__form">
            <button type="submit"><img src={Search} alt="searchBar" /></button>
            <input type="text" placeholder="Search Book" />
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
