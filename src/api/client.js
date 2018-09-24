import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const httpLink = new HttpLink({
  uri: 'http://localhost:3000',
});

const authLink = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem('token');

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }

  });

  return forward(operation);
});


export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({fragmentMatcher}),
});
