import React from "react";
import { useNavigate } from "react-router-dom";
import { postPet } from "../services/pets";

export default function Criarpets() {
  const navigate = useNavigate();

  const SubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      breed: formData.get("breed"),
      age: formData.get("age"),
      species: formData.get("species"),
      gender: formData.get("gender"),
      url: formData.get("image"),
    };

    await postPet(data);
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>Cadastro pets</h1>
      </div>
      <div>
        <form onSubmit={SubmitForm}>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" />
          <label htmlFor="breed">Raça:</label>
          <input type="text" name="breed" />
          <label htmlFor="age">Idade:</label>
          <input type="number" name="age" />
          <label htmlFor="species">Espécie:</label>
          <select name="species">
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
          <label htmlFor="gender">Gênero:</label>
          <select name="gender">
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
          <label htmlFor="image">Imagem:</label>
          <input type="url" name="image" />
          <button>Criar Pet</button>
        </form>
      </div>
    </>
  );
}