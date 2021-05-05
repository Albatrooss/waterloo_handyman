import React from 'react';
import { Box, Heading, Button, Image, Text, Flex } from '@chakra-ui/react';
import theme from '../../theme';
import NextLink from 'next/link';

interface Props {}

const desktop = ({}: Props) => {
    return (
        <Box
            w='100%'
            h='85vh'
            my={8}
            mx='auto'
            position='relative'
            backgroundColor='#F2F2F2'
            overflow='hidden'
        >
            <Image
                src='/painter.png'
                alt='Patrick Nadon'
                h='100%'
                position='absolute'
                top={0}
                bottom={0}
                right={0}
                zIndex={1}
            />
            {/* <Box w='70%' p={4} position='relative' zIndex={2} h='100%'> */}
            <Flex
                justifyContent='space-evenly'
                alignItems='center'
                w='70%'
                p={4}
                position='relative'
                zIndex={2}
                h='100%'
            >
                <Box flex={1} h='60vh'>
                    <Image
                        src='/patrick_photo01.jpeg'
                        alt='Patrick Nadon'
                        h='100%'
                        ml='auto'
                        borderRadius='0.25rem'
                    />
                </Box>
                <Flex
                    flex={1}
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    h='100%'
                    // ml={4}
                >
                    <Heading textAlign='center' my={4}>
                        QUICK FIXES AT A REASONABLE PRICE
                    </Heading>
                    <Heading size='lg' textAlign='center' my={4}>
                        License and Insured Handyman serving KW and surrounding areas
                    </Heading>
                    <Heading size='sm' textAlign='center'>
                        Owner: Patrick Nadon
                    </Heading>
                    {/* <Text textAlign='center'>Licensed and Insured Handyman</Text> */}
                    <NextLink href='/get-a-quote'>
                        <Button
                            size='lg'
                            mt={8}
                            backgroundColor={theme.colors.primary}
                            color={theme.colors.white}
                            fontWeight='bold'
                        >
                            GET A QUOTE
                        </Button>
                    </NextLink>
                    <Text textAlign='center'>(519) 635-7085</Text>
                </Flex>
            </Flex>
            {/* </Box> */}
        </Box>
    );
};

export default desktop;
