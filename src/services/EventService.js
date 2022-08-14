import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/se331-2022/passengerdb",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getEvents(perPage, page) {
    return apiClient.get("/passenger?_page=" + page + "&_limit=" + perPage);
  },
  //Added new call
  getEvent(id) {
    return apiClient.get("/passenger/" + id);
  },
  //Added new call
  getEventAir(id) {
    return apiClient.get("/airline/" + id);
  },
};
