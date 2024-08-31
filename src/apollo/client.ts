import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://willangie.us-east-a.ibm.stepzen.net/api/twelvedata/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `${process.env.EXPO_PUBLIC_APOLO_STEPZEN_APIKEY}`,
  },
});

export default client;
