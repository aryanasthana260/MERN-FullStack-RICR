import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://Localhost:4500",
});

export default axiosInstance;
