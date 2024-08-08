import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://willangie.us-east-a.ibm.stepzen.net/api/twelvedata/__graphql',
  cache: new InMemoryCache(),
  headers: {
      Authorization: `Apikey apikey`,
  }
});

export default client;
