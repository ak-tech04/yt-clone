import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// console.log(import.meta.env.VITE_RAPID_API_KEY);

const options = {
  params: {
    maxResults: "5",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

async function fetchFromAPI(url) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    return { message: error };
  }
}

export { fetchFromAPI };
