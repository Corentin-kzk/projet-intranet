import axios from "axios";
const URL = import.meta.env.VITE_URLAPI;

async function deleteData(route) {
  const token = sessionStorage.getItem('jwt');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  try {
    let res = await axios.delete(`${URL}${route}`, config);
    
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.error(err.request);
    } else {
      // Anything else
      console.error("Error", err.message);
    }
    return err;
  }
}

export default deleteData;
