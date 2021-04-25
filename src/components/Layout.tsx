import React from 'react';
import { Box } from '@chakra-ui/layout';
import theme from '../theme';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
    title: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel='apple-touch-icon' sizes='180x180' href='/README/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/README/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/README/favicon-16x16.png' />
                <link rel='manifest' href='/README/site.webmanifest' />
                <link rel='mask-icon' href='/README/safari-pinned-tab.svg' color='#5bbad5' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff'></meta>
            </Head>
            <Navbar />
            <Box w='100%' maxW={theme.maxW} mx='auto' minH='85vh'>
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
