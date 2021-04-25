import { Heading } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../components/Layout';

interface Props {}

const thankForQuote = ({}: Props) => {
    return (
        <Layout title='Thanks!'>
            <Heading>Thanks!</Heading>
        </Layout>
    );
};

export default thankForQuote;
