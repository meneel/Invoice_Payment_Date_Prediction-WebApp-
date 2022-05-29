import axios from "axios";
const predict = async(data) => {
  let response = await axios.post("http://127.0.0.1:5000/", data);

  console.log(response.data);
  return response.data;
}

export default predict;