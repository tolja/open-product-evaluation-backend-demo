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
          devices {
            id 
            name
          }
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
                choiceDefault: default
              }
              ... on RegulatorQuestion {
                labels {
                  image {
                    url
                  }
                  id
                  label
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
          states {
            key
            value
          }
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
