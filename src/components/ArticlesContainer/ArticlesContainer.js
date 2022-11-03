import "./ArticlesContainer.css";
import SingleArticle from "../SingleArticle/SingleArticle";

const ArticlesContainer = ({
  articles,
  section,
  title,
  displaySingleArticle,
}) => {
  let sortedArticles = articles.sort((a, b) => a.section.localeCompare(b.section));
  // let sortedArticles = articles.sort((a, b) =>
  //   a.section > b.section ? 1 : b.section > a.section ? -1 : 0
  // );

  const articleList = sortedArticles.map((article) => {
    return (
      <SingleArticle
        id={article.title}
        key={article.title}
        section={article.section}
        title={article.title}
        byline={article.byline}
        multimedia={article.multimedia}
        displaySingleArticle={displaySingleArticle}
      />
    );
  });
  if (!section || !articles) {
    <p>Loading...</p>;
  }
  return (
    <div className="section-container">
      <h1 className="top-stories-or-title">
        {!title
          ? `Home Section`
          : `${title.charAt(0).toUpperCase() + title.slice(1)} Section`}
      </h1>
      <div className="articles-container">{articleList}</div>
    </div>
  );
};

export default ArticlesContainer;
