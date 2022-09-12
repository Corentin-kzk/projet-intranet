import axios from "axios";
const URL = import.meta.env.VITE_URLAPI;

async function getData(route) {
  try {
    let res = await axios.get(`${URL}/${route}`);

    // Work with the response...
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log(err.request);
    } else {
      // Anything else
      console.log("Error", err.message);
    }
  }
}

export default getData;
