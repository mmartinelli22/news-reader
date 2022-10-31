import "./ArticlesContainer.css";
import SingleArticle from "../SingleArticle/SingleArticle";

const ArticlesContainer = ({ articles, displaySingleArticle }) => {
  // WHY YOU NO WOOOOOORK?!?!!?!?!?!?!?!
  // const sortedSections = articles.sort((a, b) => a.section - b.section);
  // console.log("SORTED: ", sortedSections);
  const articleList = articles.map((article) => {
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
      {/* <div className="articles-container">{articleList}</div> */}
      <div className="articles-container"><SingleArticle /></div>
    </div>
  );
};

export default ArticlesContainer;
