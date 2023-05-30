import axios, { AxiosResponse } from "axios";
import { PostType } from "../models/post.interface";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
  getPosts: (): Promise<PostType[]> => requests.get("posts"),
  getAPost: (zipCode: number): Promise<PostType> =>
    requests.get(`posts/${zipCode}`),
  createPost: (post: PostType): Promise<PostType> =>
    requests.post("posts", post),
  updatePost: (post: PostType, zipCode: number): Promise<PostType> =>
    requests.put(`posts/${zipCode}`, post),
  deletePost: (zipCode: number): Promise<void> =>
    requests.delete(`posts/${zipCode}`),
};
