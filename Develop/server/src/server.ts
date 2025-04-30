import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { typeDefs, resolvers } from './schemas/index';
import { authMiddleware } from './services/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: any) => ({ user: authMiddleware(req) })
});

await server.start();
server.applyMiddleware({ app: app as any });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`GraphQL available at http://localhost:${PORT}${server.graphqlPath}`);
});

