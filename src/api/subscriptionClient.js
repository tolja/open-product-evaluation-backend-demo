import {SubscriptionClient} from "subscriptions-transport-ws";

export default new SubscriptionClient('ws://localhost:3000', {
  reconnect: true,
  connectionParams: () => ({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
});
