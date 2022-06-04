import axios from "axios";

const BASE_URL_1 = "http://3.37.201.213:8080/club";
const BASE_URL_2 = "http://3.37.201.213:8080";
const BASE_URL_UTIL = "http://3.37.201.213:8080/util";
const FB_URL = "https://clubiki-f0ba3-default-rtdb.firebaseio.com";

export const getDataBy1 = async (path) => {
  const response = await axios.get(`${BASE_URL_1}/${path}`);
  return response;
};

export const getDataBy2 = async (path) => {
  const response = await axios.get(`${BASE_URL_2}/${path}`);
  return response;
};

export const getDataByFirebase = async (path) => {
  const response = await axios.get(`${FB_URL}/${path}.json`);
  return response;
};

export const postDataBy1 = async (path, data) => {
  const response = await axios.post(`${BASE_URL_1}/${path}`, data);
  return response;
};

export const postDataBy2 = async (path, data) => {
  const response = await axios.post(`${BASE_URL_2}/${path}`, {
    method: "POST",
    body: data,
  });

  return response;
};

export const putDataByFirebase = async (path, data) => {
  const response = await axios.put(`${FB_URL}/${path}.json`, {
    method: "PUT",
    body: data,
  });
  return response;
};

export const postDataImg = async (path, data, studentId) => {
  const response = await axios.post(`${BASE_URL_UTIL}/${path}`, data, {
    headers: {
      // "Content-Type": "multipart/form-data",
      member: "201700001",
      "Access-Control-Allow-Origin": true,
    },
  });
  return response;
};
