import "./ArticleDetails.css";
import { Link } from "react-router-dom";
const dayjs = require("dayjs");

const ArticleDetails = ({ articleSelected }) => {
  return (
    <div className="details-container" key={articleSelected.title}>
      <h1 className="title">{articleSelected.title}</h1>
      <p className="byline">{articleSelected.byline}</p>
      <p className="published">
        {dayjs(articleSelected.published_date).format("dddd, MMMM D YYYY")}
      </p>
      <h2 className="abstract">{articleSelected.abstract}</h2>
      <img
        className="media"
        src={
          !articleSelected.multimedia ? (
            <div></div>
          ) : (
            articleSelected.multimedia[0].url
          )
        }
        alt="/"
      />
      <a
        className="website-anchor"
        target="_blank"
        rel="noreferrer"
        href={articleSelected.url}
      >
        Click Here to see on NY Times Website
      </a>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default ArticleDetails;
