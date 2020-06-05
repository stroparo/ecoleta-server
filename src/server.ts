import express from 'express';

const app = express();

app.use(express.json());

const users = [
  'Mr. L. Daher',
  'Mr. Jay M.',
  'Cpt. Stropz'
];

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const usersFiltered = users.filter(user => search ? user.includes(search) : users);

  return response.json(usersFiltered);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email
  };

  return response.json(user);
});

app.listen(3333);
