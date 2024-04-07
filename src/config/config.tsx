import axios from "axios";

// const baseURL = "http://localhost:8000";
const baseURL = "https://myonlinearchive-backend.onrender.com";

const getData = async(url:string, headers:any) => {
  const response = await axios.get(`${baseURL}/${url}`, {headers});
  return response.data;
}

const postData = async (url: string, data: any) => {
  const response = await fetch(`${baseURL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json().then((data) => data);
};

export { getData, postData };
