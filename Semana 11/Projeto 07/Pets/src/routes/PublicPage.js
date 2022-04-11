import { Table } from 'react-bootstrap'
import React from 'react';



class PublicPage extends React.Component {

  constructor(props) {
    super(props);

    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = {
      pets: []
    }
  }
  componentDidMount() {
    this.buscarPets();
  }
  componentWillUnmount() {

  }
  buscarPets = () => {
    fetch("https://otterwise-fake-api.herokuapp.com/pets/0o5fh3a")
      .then(response => response.json())
      .then(dados => {
        this.setState({ pets: dados })
      })
  }


  render() {
    return (
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
        <tbody>


          <tr>{/* linha */}

            <td>{this.state.pets.Name}</td>
            <td>{this.state.pets.Breed}</td>
            <td>{this.state.pets.Age}</td>
            <td>{this.state.pets.Species}</td>
            <td>{this.state.pets.Gender}</td>
            <td>{this.state.pets.Url}</td>
          </tr>


        </tbody>
      </Table>
    )

  }
}


export default PublicPage
