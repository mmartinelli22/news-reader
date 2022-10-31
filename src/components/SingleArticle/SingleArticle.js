import "./SingleArticle.css";
import { Link } from "react-router-dom";

const SingleArticle = ({ section, title, byline }) => {
  return (
    // <div className='single-article-container'>
    //   <p className='section'>{section.toUpperCase()}</p>
    //   <Link to={'/details'} style={{ textDecoration: "none" }}>
    //   <h2 className='article-title'>{title}</h2>
    //   </Link>
    //   <p className='byline'>{byline}</p>
    // </div>
    <div className="single-article-container">
      <p className="section">US</p>
      <Link to={"/details"} style={{ textDecoration: "none" }}>
        <h2 className="article-title">The Haunted Past</h2>
      </Link>
      <p className="byline">
        What ghost stories of the formerly enslaved tell us about their lives.
      </p>
    </div>
  );
};

export default SingleArticle;
