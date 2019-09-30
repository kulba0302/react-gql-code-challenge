import ApolloClient from 'apollo-boost';
import { ENDPOINT } from '../constants/endpoints';

export default function createClient() {
    return new ApolloClient({
        uri: ENDPOINT,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                },
                headers: {
                },
            });
        },
        // local data
        clientState: {
            resolvers: {
                Mutation: {},
            },
            defaults: {
                cartOpen: false,
            },
        },
    });
}
