import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'utils/ApolloClient';
import { store, StoreContext } from 'store/context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <StoreContext.Provider value={store}>
                <Component {...pageProps} />
            </StoreContext.Provider>
        </ApolloProvider>
    );
}

export default MyApp;
