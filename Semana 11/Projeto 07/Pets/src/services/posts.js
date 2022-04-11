import client from "../providers/client";

export const postPet = (data) => {
    const api_code = process.env.REACT_APP_API_CODE;
  
    const response = client.post(`/pets/${"0o5fh3a"}`, data);
  
    return response;
  };
  
