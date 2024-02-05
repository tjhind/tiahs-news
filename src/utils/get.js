import axios from "axios";
const newsApi = axios.create({ baseURL: "https://news-rpsp.onrender.com/api" });

export function getTenArticles() {
  return newsApi
    .get("/articles/?limit=10")
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getArticleById(articleId) {
  return newsApi
    .get(`/articles/${articleId}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
}
