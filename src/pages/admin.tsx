import { withUrqlClient } from 'next-urql';
import React from 'react';
import { useQuotesQuery, useUpdateQuoteStatusMutation } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { Heading, Text } from '@chakra-ui/layout';
import { Flex, Button, Box, Link } from '@chakra-ui/react';
import { useIsAuth } from '../hooks/useIsAuth';
import { Wrapper } from '../components/Wrapper';
import NextLink from 'next/link';

const admin = ({}) => {
    const authed = useIsAuth();

    if (!authed) return <Text>Loading</Text>;
    const [{ data }] = useQuotesQuery();
    const [, updateQuoteStatus] = useUpdateQuoteStatusMutation();

    const handleUpdateQuoteStatus = async (id: number, currentStatus: number) => {
        let status = (currentStatus + 1) % 4;
        const response = await updateQuoteStatus({ id, status });
        if (!response) alert("couldn't update status for some reason..");
    };

    return (
        <Wrapper variant='md'>
            <NextLink href='/'>
                <Link>HOME</Link>
            </NextLink>
            <Heading textAlign='center'>Hello Uncle Patrick!</Heading>
            {data?.quotes.map(quote => {
                let statusColorScheme = 'green';
                switch (quote.status) {
                    case 1:
                        statusColorScheme = 'yellow';
                        break;
                    case 2:
                        statusColorScheme = 'orange';
                        break;
                    case 3:
                        statusColorScheme = 'red';
                        break;
                    case 4:
                        statusColorScheme = 'blue';
                        break;
                    default:
                        statusColorScheme = 'green';
                }

                return (
                    <Flex
                        key={quote.id}
                        mx='auto'
                        my={2}
                        border='2px solid black'
                        p={4}
                        borderRadius={4}
                    >
                        <Box flex={2}>
                            <Text my={2}>Name: {quote.name}</Text>
                            <Text my={2}>Phone Number: {quote.phoneNumber}</Text>
                            <Text my={2}>Email: {quote.email}</Text>
                        </Box>
                        <Box flex={5} borderLeft='1px solid grey' pl={4}>
                            <Text>Description:</Text>
                            <Text>{quote.description}</Text>
                        </Box>
                        <Button
                            variant='outline'
                            colorScheme={statusColorScheme}
                            onClick={() => handleUpdateQuoteStatus(quote.id, quote.status)}
                        >
                            <Text>{quote.statusStr}</Text>
                        </Button>
                    </Flex>
                );
            })}
        </Wrapper>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(admin);
