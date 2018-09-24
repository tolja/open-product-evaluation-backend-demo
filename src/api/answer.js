import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
});

const createChoiceAnswer = (questionID, choice) => client.mutate(
  {
    mutation: gql`
      mutation createChoiceAnswer {
      createAnswer(data: { questionID: "${questionID}",  choice: "${choice}" })
      {
        __typename
        answer{
          __typename
          question
        }
      }, 
      }`,context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

const createLikeAnswer = (questionID, liked) => client.mutate(
  {
    mutation: gql`
      mutation createLikeAnswer {
        createAnswer(data: { questionID: "${questionID}",  liked: ${liked} })
        {
          __typename
          answer{
            __typename
            question
          }
        },
      }`,context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

const createLikeDislikeAnswer = (questionID, liked) => client.mutate(
  {
    mutation: gql`
      mutation createLikeDislikeAnswer {
      createAnswer(data: { questionID: "${questionID}",  liked: ${liked} })
      {
        __typename
        answer{
          __typename
          question
        }
      },
      }`,context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

const createRegulatorAnswer = (questionID, rating) => client.mutate(
  {
    mutation: gql`
      mutation createRegulatorAnswer {
      createAnswer(data: { questionID: "${questionID}",  rating: ${rating} })
      {
        __typename
        answer{
          __typename
          question
        }
      },
      }`,context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

const createFavoriteAnswer = (questionID, itemID) => client.mutate(
  {
    mutation: gql`
      mutation createFavoriteAnswer {
      createAnswer(data: { questionID: "${questionID}",  favoriteItem: "${itemID}" })
      {
        __typename
        answer{
          __typename
          question
        }
      },
      }`,context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

const createRankingAnswer = (questionID, rankedItems) => client.mutate(
  {
    mutation: gql`
      mutation createRankingAnswer {
      createAnswer(data: { questionID: "${questionID}",  rankedItems: ${rankedItems} })
      {
        __typename
        answer{
          __typename
          question
        }
      },
      }`,context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

export default {
  createChoiceAnswer,
  createLikeAnswer,
  createLikeDislikeAnswer,
  createRegulatorAnswer,
  createFavoriteAnswer,
  createRankingAnswer
};
