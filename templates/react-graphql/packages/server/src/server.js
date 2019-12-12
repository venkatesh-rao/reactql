import dotenv from 'dotenv';

import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import resolvers from './resolvers';
dotenv.config();
const typeDefs = importSchema('src/schema.graphql');

const enableCors = false;

const app = express();

// use helmet to prevent common xss attack
app.use(helmet());

// list of allowed origins
let whitelist = ['http://localhost:3000'];

// options for cross-origin
let corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // <- enable CORS response for requests with credentials (cookies, http authentication)
};

if (enableCors) {
  // allow requests from only specified origins
  app.use(cors(corsOptions));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
);
