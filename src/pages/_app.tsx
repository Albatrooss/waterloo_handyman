import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import { createClient, Provider } from 'urql';
import theme from '../theme';

const client = createClient({
    url: 'http://localhost:4000/graphql',
});

function MyApp({ Component, pageProps }: any) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
