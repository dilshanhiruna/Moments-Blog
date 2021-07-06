import axios from "axios";

const url = process.env.REACT_APP_URL + "posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
  axios.post(url, newPost);
};
