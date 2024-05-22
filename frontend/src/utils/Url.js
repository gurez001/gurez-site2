// import axios from "axios";

// axios.interceptors.push({
//   request: (config) => {
//     config.headers.Cookie = "cookie1=value1; cookie2=value2";
//     return config;
//   },
// });

// axios
//   .get("https://example.com/api/data")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

function client_url() {
  return "http://localhost:8000";
}
function server_url() {
  // return 'http://localhost:8000';
  return process.env.NODE_ENV === "production"
    ? "http://164.52.192.47"
    : "https://backendf-git-main-gurez001s-projects.vercel.app";
  // return 'https://new-live-gurez.onrender.com'
  // return 'https://new-live-git-main-gurez001s-projects.vercel.app'
  // return 'http://localhost:3000';
}

export { client_url, server_url };
