import { ERROR_MESSAGE } from "./constants.js";

const API_END_POINT = `https://www.omdbapi.com?apikey=7035c60c`;

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error(ERROR_MESSAGE.BAD_REQUEST);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
