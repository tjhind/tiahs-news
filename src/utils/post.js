import axios from "axios";
const newsApi = axios.create({ baseURL: "https://news-rpsp.onrender.com/api" });

export function postNewComment(articleId, reqBody) {
  return newsApi
    .post(`/articles/${articleId}/comments`, reqBody)
    .then((response) => {
      return response.data.new_comment;
    })
    .catch((err) => {
      console.log(err);
    });
}
