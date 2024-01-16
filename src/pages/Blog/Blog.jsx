import "./Blog.scss";
import BlogBg from "../../assets/images/blog-bg.png";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NewsList from "../../components/News/NewsList";
const Blog = () => {
  const title = "blog mybook";
  const subtitle ="lightweight article where discussing matters relating to the book";

  return (
    <div className="blog">
      <Hero title={title} bg={BlogBg} subtitle={subtitle} />
      <NewsList/>
      <Footer />
    </div>
  );
};

export default Blog;
