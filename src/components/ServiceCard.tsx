import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import theme from '../theme';

interface Props {
    variant?: 'sm' | 'md' | 'lg';
    text: string;
    imageSrc: string;
    right?: boolean;
}

const ServiceCard = ({ variant = 'md', text, imageSrc, right }: Props) => {
    let height = '10rem';
    switch (variant) {
        case 'lg':
            height = '16rem';
            break;
        case 'sm':
            height = '8rem';
            break;
    }
    return (
        <Box h={height} w='95%' my={4} mx='auto' overflow='hidden' position='relative'>
            <Image src={imageSrc} position='absolute' />
            <Heading
                // textAlign='center'
                mx={2}
                color={theme.colors.white}
                zIndex={1}
                position='relative'
                textAlign={right ? 'right' : 'left'}
            >
                {text}
            </Heading>
        </Box>
        // <Flex position='relative' h='100px' mb={10} alignItems='center'>
        //     <Box
        //         position='absolute'
        //         backgroundColor={theme.colors.primary}
        //         h='60px'
        //         w='100%'
        //         top='50%'
        //         mt='-30px'
        //         shadow='md'
        //     ></Box>
        //     <Flex
        //         zIndex={1}
        //         h='80px'
        //         alignItems='center'
        //         w='95%'
        //         mx='auto'
        //         flexDirection={left ? 'row-reverse' : 'row'}
        //     >
        //         <Flex h='60px' alignItems='center' flex={3}>
        //             <Text color={theme.colors.white} pr={left ? 0 : '1rem'} pl={left ? '1rem' : 0}>
        //                 {text}
        //             </Text>
        //         </Flex>
        //         <Box flex={1} backgroundColor='#FFF' shadow='lg'>
        //             <Image
        //                 p={1}
        //                 src={imageSrc}
        //                 // border='2px solid black'
        //                 shadow='inner'
        //                 borderRadius={4}
        //                 // w='100%'
        //             />
        //         </Box>
        //     </Flex>
        // </Flex>
    );
};

export default ServiceCard;
