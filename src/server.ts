import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Users! Yay!')
  response.json([
    'Mr. L. Daher',
    'Mr. Jay M.',
    'Cpt. Stropz'
  ]);
});

app.listen(3333);
