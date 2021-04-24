import { Image, Img } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import QuoteForm from '../components/QuoteForm';
import { useQuotesQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Index = () => {
    const router = useRouter();
    const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

    const submitQuoteForm = () => {
        setQuoteSubmitted(true);
    };

    useEffect(() => {
        setQuoteSubmitted(false);
    }, [router]);

    return (
        <>
            <Layout title='Home'>
                <Heading>UNDER CONSTRUCTION</Heading>
                {/* <Flex flexDir={['column', 'row']}>
                    <Box flex={1} outline='1px solid red'>
                        <Box
                            outline='2px solid blue'
                            h={['auto', '80vh', '80vh', '80vh']}
                            maxH='100vh'
                            ml='auto'
                        >
                            <Image src='/patrick_pic01.jpeg' alt='Patrick Nadon' />
                        </Box>
                    </Box>
                    <Box flex={1} outline='1px solid yellow'>
                        <Heading size='lg'>Waterloo Handyman Services</Heading>
                        Owner : Patrick Nadon Licensed and Insured Serving KW and surrounding areas
                    </Box>
                </Flex> */}
                {quoteSubmitted ? (
                    <>
                        <Text>Thank you for requesting a Quote</Text>
                        <Text>We will bet get back to you as soon as we can</Text>
                    </>
                ) : (
                    <QuoteForm submitForm={submitQuoteForm} />
                )}
            </Layout>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Index);
