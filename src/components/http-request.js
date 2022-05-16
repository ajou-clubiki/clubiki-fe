import axios from "axios";

export const getData = async (path) => {
  const response = await axios.get(`http://localhost:8000/${path}`);
  return response;
};
export const postData = async (path) => {
  const response = await axios.post(`http://localhost:8000/${path}`);
};
