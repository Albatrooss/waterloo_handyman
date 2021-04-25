import { Box, Text, Flex, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import theme from '../theme';
import NextLink from 'next/link';
import { useScreenSize } from '../hooks/useScreenSize';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Navbar = () => {
    const screenSize = useScreenSize();
    // let links = [
    //     <NextLink href='/services' key={0}>
    //         <Link
    //             fontWeight='semibold'
    //             fontSize='md'
    //             color={theme.colors.white}
    //             px={2}
    //             borderRight='2px'
    //             borderColor='white'
    //         >
    //             SERVICES
    //         </Link>
    //     </NextLink>,
    //     <NextLink href='/contact' key={1}>
    //         <Link fontWeight='semibold' fontSize='md' color={theme.colors.white} px={2}>
    //             CONTACT
    //         </Link>
    //     </NextLink>,
    // ];
    // if (screenSize !== 'phone')
    //     links.unshift(
    //         <NextLink href='/get-a-quote' key={2}>
    //             <Link
    //                 fontWeight='semibold'
    //                 fontSize='md'
    //                 color={theme.colors.white}
    //                 px={2}
    //                 borderRight='2px'
    //                 borderColor='white'
    //             >
    //                 GET A QUOTE
    //             </Link>
    //         </NextLink>
    //     );

    return (
        <Box background='blue.500' w='100%' shadow='md' position='sticky' top={0} zIndex={10}>
            <Flex w='100%' maxW={theme.maxW} p={2} mx='auto' align='center'>
                <NextLink href='/'>
                    <Box cursor='pointer'>
                        <Heading size='2xl' color={theme.colors.white} textAlign='center'>
                            W
                        </Heading>
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
