
import client from "../providers/client";

export const listPets = () =>
  client.get("https://otterwise-fake-api.herokuapp.com/pets/0o5fh3a");

export const getPets = () => {
  const api_code = process.env.REACT_APP_API_CODE;

  const response = client.get(`/pets/${"0o5fh3a"}`);

  return response;
};

