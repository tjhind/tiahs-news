import axios from "axios";
const newsApi = axios.create({ baseURL: "https://news-rpsp.onrender.com/api" });

export function upvoteArticle(articleId, reqBody) {
  return newsApi.patch(`/articles/${articleId}`, reqBody).then((response) => {
    return response.data.updated_article[0].votes;
  });
}
