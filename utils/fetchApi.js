// import axios from "axios";

// export const baseUrl = 'https://bayut.p.rapidapi.com';

// export const fetchApi = async (url) => {
//   const { data } = await axios.get((url), {
//     headers: {
//       'x-rapidapi-host': 'bayut.p.rapidapi.com',
//       'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
//     },
//   });

//   return data;
// }

import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "a7edc0087bmsh9db95ad3b894c42p196ebdjsn62bd42e26800",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
