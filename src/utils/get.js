import axios from "axios";
const newsApi = axios.create({ baseURL: "https://news-rpsp.onrender.com/api" });

export function getAllArticles(limit, topic, sort_by, order, p) {
  return newsApi
    .get("/articles/", {
      params: { limit: limit, topic: topic, sort_by: sort_by, order: order },
    })
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      return err;
    });
}

export function getAllTopics() {
  return newsApi.get("/topics").then((response) => {
    return response.data.topics;
  });
}

export function getArticleById(articleId) {
  return newsApi.get(`/articles/${articleId}`).then((response) => {
    return response.data.article;
  });
}

export function getCommentsById(articleId) {
  return newsApi.get(`/articles/${articleId}/comments`).then((response) => {
    return response.data.comments;
  });
}

export function getAllUsers() {
  return newsApi.get(`/users`).then((response) => {
    return response.data.users;
  });
}
