import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/layout';
import theme from '../theme';

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
        </>
    );
};

export default Layout;
