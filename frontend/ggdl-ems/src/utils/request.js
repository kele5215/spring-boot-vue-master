import axios from "axios";

axios
  .get("db.json")
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.log(error.message());
  });