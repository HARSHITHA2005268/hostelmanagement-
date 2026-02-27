import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// Add token to headers
export const setToken = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};