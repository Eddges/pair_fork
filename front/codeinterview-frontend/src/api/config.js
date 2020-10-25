//let baseURL = 'codeinterview-backend.herokuapp.com';
let baseURL = 'localhost:8000';
let httpPrefix = 'http://';
let wsPrefix = 'wss://';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'localhost:8000';
  httpPrefix = 'http://';
  wsPrefix = 'ws://';
}

export default {
  http: {
    baseURL: `${httpPrefix}${baseURL}/api`,
  },
  ws: {
    baseURL: `${wsPrefix}${baseURL}/ws`,
  },
};
