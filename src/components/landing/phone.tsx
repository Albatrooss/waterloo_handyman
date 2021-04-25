import { Box, Heading, Image, Button, Text } from '@chakra-ui/react';
import React from 'react';
import theme from '../../theme';
import NextLink from 'next/link';

const phone = () => {
    return (
        <Box w='90%' h='85vh' mx='auto'>
            <Heading textAlign='center' my={4}>
                Waterloo Handyman Services
            </Heading>
            <Heading size='md' textAlign='center' my={4}>
                Serving KW and surrounding areas
            </Heading>
            <Image src='/patrick_pic01.jpeg' alt='Patrick Nadon' maxH='40vh' mx='auto' my={4} />
            <Heading size='sm' textAlign='center'>
                Owner: Patrick Nadon
            </Heading>
            <Text textAlign='center'>Licensed and Insured Handyman</Text>
            <NextLink href='/get-a-quote'>
                <Button
                    w='100%'
                    mt={4}
                    backgroundColor={theme.colors.primary}
                    color={theme.colors.white}
                    fontWeight='bold'
                >
                    GET A QUOTE
                </Button>
            </NextLink>
            <Text textAlign='center'>(123) 456-7890</Text>
        </Box>
        // <Flex flexDir={['column', 'row']}>
        //     <Box flex={1}>
        //         <Box h={['auto', '80vh', '80vh', '80vh']} maxH='100vh'>
        //         </Box>
        //     </Box>
        //     <Box flex={1}>
        //         <Heading size='lg'>Waterloo Handyman Services</Heading>
        //         Owner : Patrick Nadon Licensed and Insured Serving KW and surrounding areas
        //     </Box>
        // </Flex>
    );
};

export default phone;
