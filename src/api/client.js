import { ApolloClient  } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink  } from 'apollo-link'
import { InMemoryCache, IntrospectionFragmentMatcher  } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';
import { split  } from 'apollo-link'
import {  WebSocketLink  } from 'apollo-link-ws'
import SubscriptionClient from './subscriptionClient'
import { getMainDefinition  } from 'apollo-utilities'
import store from '@/store/store';


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const uri = 'http://localhost:3000'

const httpLink = new HttpLink({
  uri: uri,
});

const wsLink = new WebSocketLink(SubscriptionClient);

const authMiddleware = new ApolloLink((operation, forward) => {

  const token = store.getters.getDeviceToken
  operation.setContext({
    headers: {

      Authorization: token ? `Bearer ${token}` : ''
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
  cache: new InMemoryCache({fragmentMatcher}),
});
