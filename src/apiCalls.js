const fetchArticles = (section) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=jpWw4XQtkRyplJEanHSnWbDdKgJfOGpw`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch((error) => console.log(error));
};

export default fetchArticles;
