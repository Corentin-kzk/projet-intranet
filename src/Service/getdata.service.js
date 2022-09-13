import axios from "axios";
const URL = import.meta.env.VITE_URLAPI;

async function getData(route) {
  const token = sessionStorage.getItem('jwt');
  console.log(token , 'toto');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  try {
    let res = await axios.get(`${URL}${route}`, config);
    // Work with the response...
    console.log(res);
    return res.data;
    
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
