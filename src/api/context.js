import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:3000',
});

const getContextList = () => client.query(
  {
    query: gql`
      query getContextList {
        contexts {
          id
          name
          activeSurvey {
            id
            description
            title
            types
            questions {
              id
              description
              value
              items {
                image {
                  url
                  id
                }
                label
              }
              ... on LikeQuestion {
                likeIcon {
                  id
                  url
                }
              }
              ... on LikeDislikeQuestion {
                likeIcon {
                  id
                  url
                }
                dislikeIcon {
                  id
                  url
                }
              }
              ... on ChoiceQuestion {
                choices {
                  id
                  image {
                    url
                  }
                  label
                  code
                }
              }
              ... on RegulatorQuestion {
                labels {
                  image {
                    url
                  }
                  value
                }
                default
                max
                min
                stepSize
              }
              items {
                id
                image {
                  url
                }
                label
              }
            }
          }
          activeQuestion { id, value, type }
        }
      }`,
    context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })


export default {
  getContextList,
};
