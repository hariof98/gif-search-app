/* In this constants file, we can maintain the details of API, API Key, any constant data 
that we want to use in our app. */

export const GIPHY_RANDOM_API = "https://api.giphy.com/v1/gifs/random?";

export const GIPHY_SEARCH_API = "https://api.giphy.com/v1/gifs/search?";

export const API_KEY = `api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
