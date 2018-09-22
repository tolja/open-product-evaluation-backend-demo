import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
});

const createDevice = () => client.mutate(
  {
    mutation: gql`
      mutation createDevice {
        createDevice(data: {name: "Demo Client"}) {
          device {
            id
          }
          token
        }
      }`,
  })

const updateDevice = (contextID, deviceID) => client.mutate(
  {
    mutation: gql`
      mutation updateDevice {
        updateDevice(data: {name: "Demo Client", context: "${contextID}"},  deviceID: "${deviceID}"
        ) {
        device{ id }
        }
      }`,
    context: {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  })

export default {
  createDevice,
  updateDevice
};
