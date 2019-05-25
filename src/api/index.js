import axios from 'axios';

// Proxy url to handle CORS
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json';

// Exporting axios config instance with base url set
export default axios.create({
  baseURL: proxyurl + url,
});
