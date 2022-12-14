import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://agile-brushlands-72289.herokuapp.com/graphql',
    // uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache({ addTypename: false }),
});
