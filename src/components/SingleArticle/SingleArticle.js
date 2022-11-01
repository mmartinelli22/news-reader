import "./SingleArticle.css";
import { Link } from "react-router-dom";

const SingleArticle = ({ section, title, byline, displaySingleArticle }) => {
  return (
    <div className="single-article-container">
      <p className="section">{section.toUpperCase()}</p>
      <Link to={"/details"} style={{ textDecoration: "none", color: "blue" }}>
        <h2
          className="article-title"
          onClick={() => displaySingleArticle(title)}
          value={title}
        >
          {title}
        </h2>
      </Link>
      <p className="byline">{byline}</p>
    </div>
  );
};

export default SingleArticle;
