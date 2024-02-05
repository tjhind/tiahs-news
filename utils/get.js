import axios from "axios";

export function getTenArticles() {
  return axios
    .get("https://news-rpsp.onrender.com/api/articles/?limit=10")
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}
