import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const httpLink = new HttpLink({
  uri: 'http://localhost:3000',
});


const wsLink = new WebSocketLink({
  uri: `${'http://localhost:3000'
    .replace('http', 'ws')}`,
  options: {
    reconnect: true,
    connectionParams: () => {
      return { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }
  }
})

const authMiddleware = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem('token')

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }

  });

  return forward(operation);
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' &&
      operation === 'subscription'
  },
  wsLink,
  authMiddleware.concat(httpLink),
)


export default new ApolloClient({
  link: link,
  cache: new InMemoryCache({fragmentMatcher})
});
