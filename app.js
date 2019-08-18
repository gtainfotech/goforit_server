import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import schema from './schema';

const app = express();
const PORT = process.env.PORT || 3033;

app.use(cors());
app.use(morgan('dev'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});

console.log('Running a GraphQL API server at localhost:8088/graphql');
