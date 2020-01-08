import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-93ee8.firebaseio.com"
});

export default instance;
