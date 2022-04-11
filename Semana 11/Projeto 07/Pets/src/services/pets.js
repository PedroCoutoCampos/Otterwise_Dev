import client from '../providers/client'

export const listPets = () =>
client.get('https://otterwise-fake-api.herokuapp.com/pets/0o5fh3a')


