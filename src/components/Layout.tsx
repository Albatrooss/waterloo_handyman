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
            </Head>
            <Navbar />
            <Box w='100%' maxW={theme.maxW} mx='auto'>
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
