import axios from "axios";

export const coreAxios = axios.create({
  baseURL: `https://prime-automation-server-production.up.railway.app`,
  headers: { "Access-Control-Allow-Origin": "*" },
  validateStatus: false,
  withCredentials: false,
});
/* export const coreAxios2 = axios.create({
    baseURL: process.env.REACT_APP_MAIN_URL,
    headers: { "Access-Control-Allow-Origin": "*", "api-version": 1.1 },
}); */
