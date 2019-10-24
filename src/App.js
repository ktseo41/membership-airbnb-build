import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Top } from './container/top';
import HomesApp from './container/homesApp';
import env from './env';

const { host, port, endpoint } = env;
const client = new ApolloClient({
    uri: `http://${host}:${port}/${endpoint}`,
    cache: new InMemoryCache({
        dataIdFromObject: (object) =>
            object.home_id || object.user_id || object.reservation_id || null,
    }),
});

function App() {
    const name = 'membership-airbnb-build from ss38';
    return (
        <ApolloProvider client={client}>
            <Top />
            <HomesApp />
        </ApolloProvider>
    );
}

export default App;
