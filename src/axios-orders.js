import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-641ae-default-rtdb.firebaseio.com/"
});

export default instance;
