import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import network from "../constants/network";
import apolloLogger from "apollo-link-logger";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const link = createHttpLink({
  uri: `${network.server}/graphql`,
  credentials: "same-origin",
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const loggerLink = ApolloLink.from([apolloLogger, link]);

const client = new ApolloClient({
  uri: `${network.server}/graphql`,
  link: authLink.concat(loggerLink),
  cache: new InMemoryCache(),
});

export default client;
