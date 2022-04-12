import client from "../providers/client";

export const listPets = () =>
  client.get("https://otterwise-fake-api.herokuapp.com/'pets/0o5fh3a");

export const getPets = () => {

  const response = client.get(`/pets/${"0o5fh3a"}`);

  return response;
};

export const postPet = (data) => {

  const response = client.post(`/pets/${"0o5fh3a"}`, data);

  return response;
};