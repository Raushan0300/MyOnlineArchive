const baseURL = "http://localhost:8000";
// const baseURL = "https://myonlinearchive-backend.onrender.com";

const getData = async (url: string) => {
  const response = await fetch(`${baseURL}/${url}`);
  return response.json().then((data) => data);
};

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
