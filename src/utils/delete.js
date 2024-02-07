import axios from "axios";
const newsApi = axios.create({ baseURL: "https://news-rpsp.onrender.com/api" });

export function deleteOwnComment(commentId) {
  return newsApi
    .delete(`/comments/${commentId}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
