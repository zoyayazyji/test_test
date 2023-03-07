import axios from "axios";

const axiosOrder = axios.create({
  baseURL: "https://js8-zoya-yazyji-default-rtdb.firebaseio.com/"
})

export default axiosOrder;