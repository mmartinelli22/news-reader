import "./ArticlesContainer.css";
import SingleArticle from "../SingleArticle/SingleArticle";

const ArticlesContainer = ({ articles, displaySingleArticle }) => {
  let sortedArticles = articles.sort((a,b) => (a.section > b.section) ? 1 : ((b.section > a.section) ? -1 : 0));
  const articleList = sortedArticles.map((article) => {
    return (
      <SingleArticle
        id={article.title}
        key={article.title}
        section={article.section}
        title={article.title}
        byline={article.byline}
        displaySingleArticle={displaySingleArticle}
      />
    );
  });

  return (
    <div className="section-container">
      <h1>Top Stories</h1>
      <div className="articles-container">{articleList}</div>
    </div>
  );
};

export default ArticlesContainer;
