import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ArticlesContainer from "./components/ArticlesContainer/ArticlesContainer";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";
import fetchArticles from "./apiCalls";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleSelected, setArticleSelected] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchArticles("home").then((data) => setArticles(data.results));
  }, []);

  const displaySingleArticle = (title) => {
    const articleSectionPick = articles.find((art) => art.title === title);
    setArticleSelected(articleSectionPick);
  };

  const displayNewSection = (section) => {
    fetchArticles(section).then((data) => setArticles(data.results));
    setTitle(section);
  };

  const displayHomeStories = () => {
    fetchArticles("home").then((data) => setArticles(data.results));
    setTitle("");
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <NavBar displayNewSection={displayNewSection} />
              <ArticlesContainer
                articles={articles}
                title={title}
                displaySingleArticle={displaySingleArticle}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/details"
          render={() => (
            <div>
              <NavBar displayNewSection={displayNewSection} />
              <ArticleDetails
                articleSelected={articleSelected}
                displayHomeStories={displayHomeStories}
              />
            </div>
          )}
        />
        <Route
          path="*"
          render={() => (
            <div>
              <NavBar displayNewSection={displayNewSection} />
              <ErrorPage />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
