import axios from "axios";

export const request = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await axios.post("http://localhost:5000/request", data, config);

  return res;
};
