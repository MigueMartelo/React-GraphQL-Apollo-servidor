import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Todo ok');
});

// el resolver
const root = { hola: () => "Hola Mundo desde GrahpQL" };

app.use('/graphql', graphqlHTTP({
  // que schema va a utilizar
  schema,
  // el resolver se pasa como rootValue
  rootValue: root,
  // utilizar graphiql
  graphiql: true
}));

app.listen(8000, () => console.log('Server on port 8000'));