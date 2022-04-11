import React from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useEffect } from 'react'
// import { listPets } from '../services/pets'
// useEffect(() => {
//   const request = async () => {
//     const response = await listPets()
//     console.log(response)
//   }
//   request()
// })
class ProtectedPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      breed: '',
      age: '',
      species: '',
      gender: '',
      url: '',
      pets: []
    }

  }
  cadastraPet = (pet) => {
    fetch("https://otterwise-fake-api.herokuapp.com/pets/0o5fh3a",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pet)
      })
      .then(resposta => {
        if (resposta.ok) {
          this.buscarPets();
        }else {
          alert('Deu ruim')
        }
      })
  }




  atualizaName = (e) => {
    this.setState(
      {
        name: e.target.value
      }
    )
  }
  atualizaBreed = (e) => {
    this.setState(
      {
        breed: e.target.value
      }
    )
  }
  atualizaAge = (e) => {
    this.setState(
      {
        age: e.target.value
      }
    )
  }
  atualizaSpecies = (e) => {
    this.setState(
      {
        species: e.target.value
      }
    )
  }
  atualizaGender = (e) => {
    this.setState(
      {
        gender: e.target.value
      }
    )
  }
  atualizaUrl = (e) => {
    this.setState(
      {
        url: e.target.value
      }
    )
  }
  submit = () => {
    const pet = {
      name: this.state.name,
      breed: this.state.bordered,
      age: this.state.age,
      species: this.state.species,
      gender: this.state.gender,
      url: this.state.url
    }
    this.cadastraPet(pet);
  }
  render() {
    return (
      <div>
      <div className="formCadas"><Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Nome do animal" value={this.state.name} onChange={this.atualizaName} />
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Raça" value={this.state.breed}  onChange={this.atualizaBreed}/>
        </Form.Group> 
        <Form.Group >
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Idade" value={this.state.age}  onChange={this.atualizaAge}/>
        </Form.Group> <Form.Group >
          <Form.Label>Species</Form.Label>
          <Form.Control type="text" placeholder="Espécie" value={this.state.species}  onChange={this.atualizaSpecies}/>
          <Form.Text className="text-muted">
            Dog or Cat</Form.Text>
        </Form.Group>
        <Form.Group >
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Gênero" value={this.state.gender}  onChange={this.atualizaGender}/>
          <Form.Text className="text-muted">
            Male or Female</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Url</Form.Label>
          <Form.Control type="url" placeholder="Foto" value={this.state.url}  onChange={this.atualizaUrl}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.cadastraPet}>
          Register
        </Button>
      </Form>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead> {/* Cabeçario  */}
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Species</th>
              <th>Gender</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>{/* corpo da linha */}
            {
              this.state.pets.map((pets) =>
                <tr>{/* linha */}
                  <td>{pets.name}</td>
                  <td>{pets.breed}</td>
                  <td>{pets.age}</td>
                  <td>{pets.species}</td>
                  <td>{pets.gender}</td>
                  <td>{pets.url}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      
      </div>
      </div>
    )
  }
}
export default ProtectedPage;
