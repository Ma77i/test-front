import axios from "axios";

export default axios.create({
  // baseURL:
  //   "https://59jwubnb4d.execute-api.us-east-1.amazonaws.com/Prod/hotels/",
  baseURL: "/db.json",
});
