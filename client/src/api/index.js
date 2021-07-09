import axios from "axios";

const url = process.env.REACT_APP_URL + "posts";
// const url = "https://moment-blog.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
  axios.post(url, newPost);
};

export const updatePost = (id, updatePost) => {
  axios.patch(`${url}/${id}`, updatePost);
};

export const deletePost = (id) => {
  axios.delete(`${url}/${id}`);
};

export const likePost = (id) => {
  axios.patch(`${url}/${id}/likePost`);
};

