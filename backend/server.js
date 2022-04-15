const express = require('express');
const app = express();
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');

const connectDB = require('./config/db');
const resolver = require('./resolver/resolver');
const movieSchema = require('./schema/schema');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

const rootValue = {
  name: () => {
    return 'Hello World';
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: movieSchema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
