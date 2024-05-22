import axios from "axios";
import Cookies from "universal-cookie";
import { server_url } from "./Url";

const axiosInstance = axios.create({
  baseURL: `${server_url()}`, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add custom headers or any other modifications here
    const token = new Cookies().get("token");
    console.log(token)
    if (token) {
      config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwLCJpYXQiOjE3MTYzNjA0NTksImV4cCI6MTcxNjc5MjQ1OX0.Pl_97HMLhnmWSbHVlu0-IigYqM9M0f77Q35ei412bOI`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
