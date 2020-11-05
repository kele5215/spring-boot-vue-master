import axios from "axios";

// axios
//   .get("db.json")
//   .then(response => {
//     const data = response.data;
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.message());
//   });

const request = axios.create({
  baseURL: "/",
  timeout: 5000
});

export default request;
