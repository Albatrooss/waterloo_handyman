import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/button';
import theme from '../theme';

interface Props {}

const thankForQuote = ({}: Props) => {
    return (
        <Layout title='Thanks!'>
            <Box minH='80vh' pt={4}>
                <Heading textAlign='center'>
                    Thanks for considering Waterloo Handyman Services!
                </Heading>
                <Text textAlign='center' mt={8}>
                    We have recieved your information and will get back to as soon as possible.
                </Text>
                <Text textAlign='center'>- Patrick</Text>
                <Flex mt={8}>
                    <NextLink href='/'>
                        <Button
                            mx='auto'
                            backgroundColor={theme.colors.primary}
                            color={theme.colors.white}
                        >
                            Home
                        </Button>
                    </NextLink>
                </Flex>
            </Box>
        </Layout>
    );
};

export default thankForQuote;
