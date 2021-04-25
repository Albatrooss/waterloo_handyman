import React from 'react';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import QuoteForm from '../components/QuoteForm';
import Layout from '../components/Layout';
import { Heading } from '@chakra-ui/layout';
import theme from '../theme';

interface Props {}

const GetAQuote = ({}: Props) => {
    return (
        <Layout title='Get a Quote'>
            <Heading mt={4} textAlign='center' color={theme.colors.third}>
                Get a Quote
            </Heading>
            <QuoteForm submitForm={() => {}} />
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient)(GetAQuote);
