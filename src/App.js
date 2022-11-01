import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import ArticlesContainer from "./components/ArticlesContainer/ArticlesContainer";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleSelected, setArticleSelected] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jpWw4XQtkRyplJEanHSnWbDdKgJfOGpw"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.results));
  }, []);
  
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
      </Switch>
    </div>
  );
}

export default App;
