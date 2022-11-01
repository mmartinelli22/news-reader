import "./ArticleDetails.css";
import { Link } from "react-router-dom";
const dayjs = require('dayjs')

const ArticleDetails = ({ articleSelected }) => {
  console.log("ARTICLESELECTED: ", articleSelected);
  return (
    <div className="details-container" key={articleSelected.title}>
      <h1 className="title">{articleSelected.title}</h1>
      <p className="byline">{articleSelected.byline}</p>
      <p className="published">{dayjs(articleSelected.published_date).format('dddd, MMMM D YYYY')}</p>
      <h2 className="abstract">{articleSelected.abstract}</h2>
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
    // <div className="details-container">
    //   <h1 className="title">The Haunted Past</h1>
    //   <p className="byline">By Jennifer Wilson</p>
    //   <p className="published">2022-10-28T05:00:15-04:00</p>
    //   <h3 className="abstract">
    //     What ghost stories of the formerly enslaved tell us about their lives.
    //   </h3>
    //   <a
    //     className="website-anchor"
    //     target="_blank"
    //     rel="noreferrer"
    //     href={
    //       "https://www.nytimes.com/2022/10/28/books/review/ghost-stories-slave-narratives-wpa.html"
    //     }
    //   >
    //     Click Here to see on NY Times Website
    //   </a>
    //   <Link to="/" style={{ textDecoration: "none" }}>
    //     <button>Return Home</button>
    //   </Link>
    // </div>
  );
};

export default ArticleDetails;
