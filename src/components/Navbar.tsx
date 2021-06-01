import { Box, Text, Flex, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import theme from '../theme';
import NextLink from 'next/link';
import { useScreenSize } from '../hooks/useScreenSize';
import { styled } from '@chakra-ui/system';

const Navbar = () => {
    const screenSize = useScreenSize();
    const isMonitor = screenSize === 'desktop';
    return (
        <Box background='blue.500' w='100%' shadow='md' position='sticky' top={0} zIndex={10}>
            <Flex w='100%' maxW={theme.maxW} p={2} mx='auto' align='center'>
                <NextLink href='/'>
                    <Box cursor='pointer'>
                        <h1 style={{fontSize: '2.2rem', fontWeight: 'bolder', color: 'white'}}>
                            {screenSize === 'desktop' ? 'WATERLOO HANDYMAN' : 'W'}
                        </h1>
                        {/* <Heading size='sm' color={theme.colors.white} textAlign='center'>
                            HANDYMAN
                        </Heading>
                        <Heading size='sm' color={theme.colors.black} textAlign='center'>
                            SERVICES
                        </Heading> */}
                    </Box>
                </NextLink>
                <Flex ml='auto'>
                    <NextLink href='/services'>
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
                    </NextLink>
                    <NextLink href='/get-a-quote'>
                        <Link fontWeight='semibold' fontSize='md' color={theme.colors.white} px={2}>
                            GET A QUOTE
                        </Link>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
