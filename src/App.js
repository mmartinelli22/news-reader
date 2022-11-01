import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ArticlesContainer from "./components/ArticlesContainer/ArticlesContainer";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";
import fetchArticles from "./apiCalls";
// import * as fs from 'fs'
// require('dotenv').config()
// console.log("PROCESS.ENV API KEY: ", process.env.MY_KEY)

function App() {
  const [articles, setArticles] = useState([]);
  const [articleSelected, setArticleSelected] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data.results));
  }, []);

  console.log('ARTICLES: ', articles);

  const displaySingleArticle = (title) => {
    const articleSectionPick = articles.find((art) => art.title === title);
    setArticleSelected(articleSectionPick);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <NavBar />
              <ArticlesContainer
                articles={articles}
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
              <NavBar />
              <ArticleDetails articleSelected={articleSelected} />
            </div>
          )}
        />
        <Route
          path="*"
          render={() => (
            <div>
              <NavBar />
              <ErrorPage />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
