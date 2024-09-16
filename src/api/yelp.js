import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wCrbad-wrVSl3jWnQhx7A62qQzMMNFGVrAWTmR50ApljfidDu8GfOHBTsJOgaLegSQVaAFbXDegmXFtWRYF8ggx37qd1pYQaKXGIUz7FUw2qSG9EjGwjf5HiUTzoZnYx",
  },
});

//yelp.get('/search')
