import { Box, Text, Flex, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import theme from '../theme';

const Navbar = () => {
    return (
        <Box background='blue.500' w='100%'>
            <Flex w='100%' maxW={theme.maxW} p={2} mx='auto' align='center'>
                <Box>
                    <Heading size='sm' color={theme.colors.black} textAlign='center'>
                        WATERLOO
                    </Heading>
                    <Heading size='sm' color={theme.colors.white} textAlign='center'>
                        HANDYMAN
                    </Heading>
                    <Heading size='sm' color={theme.colors.black} textAlign='center'>
                        SERVICES
                    </Heading>
                </Box>
                <Box ml='auto'>
                    <Link
                        fontWeight='semibold'
                        fontSize='md'
                        color={theme.colors.white}
                        px={2}
                        borderRight='2px'
                        borderColor='white'
                    >
                        SERVICES
                    </Link>
                    <Link fontWeight='semibold' fontSize='md' color={theme.colors.white} px={2}>
                        CONTACT
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
