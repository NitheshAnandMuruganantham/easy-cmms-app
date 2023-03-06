import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import network from "../constants/network";
import apolloLogger from "apollo-link-logger";

const link = createHttpLink({
  uri: `${network.server}/graphql`,
  credentials: "same-origin",
});

const loggerLink = ApolloLink.from([apolloLogger, link]);

const client = new ApolloClient({
  uri: `${network.server}/graphql`,
  connectToDevTools: true,
  link: loggerLink,
  cache: new InMemoryCache(),
});

export default client;
