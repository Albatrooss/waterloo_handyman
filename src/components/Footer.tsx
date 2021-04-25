import React from 'react';
import { Flex, Box, Heading, Image, Button, Text, Link } from '@chakra-ui/react';
import theme from '../theme';

interface Props {}

const Footer = ({}: Props) => {
    return (
        <Box backgroundColor={theme.colors.grey} mt={4} p={4}>
            <Heading size='sm' textAlign='center' mb={2}>
                Have a question?
            </Heading>
            <Flex justifyContent='center'>
                <Link>(123) 456-7890</Link>
                <Link ml={4} href='mailto:emailhere' target='_blank'>
                    email@email.ca
                </Link>
            </Flex>
        </Box>
    );
};

export default Footer;
