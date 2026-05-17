import axios from "axios";

const API = "http://127.0.0.1:8000/api";

export const loginUser = async (payload) => {

   const response = await axios.post(
      `${API}/login`,
      payload
   );

   return response.data;
};

export const registerUser = async (payload) => {

   const response = await axios.post(
      `${API}/register`,
      payload
   );

   return response.data;
};

export const forgotPassword = async (payload) => {

   const response = await axios.post(
      `${API}/forgot-password`,
      payload
   );

   return response.data;
};