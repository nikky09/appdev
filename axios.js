import axios from "axios";

const instance = axios.create({
  baseURL : "https://barcodeapp-api-updated-test.onrender.com/api/v1",

  withCredentials: true,
});

export default instance;
