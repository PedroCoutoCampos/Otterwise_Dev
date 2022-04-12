import { useState, useEffect } from "react";

import { getPets } from "../services/pets";

export default function Listarpets() {
  const [listarPets, setlistarPets] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await getPets();
      setlistarPets(response.data.pets);
    };
    request();
  }, []);

  return (
    <div>
      {listarPets !== [] ? (
        listarPets.map(({ id, name, breed, age, species, gender, url }) => (
          <div key={id}>
            <img src={url} alt={breed} />
            <div>
              <h3>
                {name} - {age} ano(s)
              </h3>
              <p>
                {species} - {gender}
              </p>
            </div>
          </div>
        ))
      ) : (
        <h1>Aguarde...</h1>
      )}
    </div>
  );
}