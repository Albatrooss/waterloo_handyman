import { CheckIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { useScreenSize } from '../hooks/useScreenSize';
import theme from '../theme';

interface Props {
    variant?: 'sm' | 'md' | 'lg';
    text: string;
    imageSrc: string;
    right?: boolean;
    services: string[];
}

const ServiceCard = ({ variant = 'md', text, imageSrc, right, services }: Props) => {
    const screenSize = useScreenSize();
    if (screenSize === 'phone')
        return (
            <Box h='10em' w='95%' my={4} mx='auto' overflow='hidden' position='relative'>
                <Image src={imageSrc} position='absolute' w='100%' />
                <Heading
                    // textAlign='center'
                    mx={2}
                    color={theme.colors.white}
                    zIndex={1}
                    position='relative'
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
    return (
        <Flex
            flexDirection={right ? 'row-reverse' : 'row'}
            my={6}
            backgroundColor='#4F5456'
            borderRadius={4}
            shadow='lg'
            overflow='hidden'
        >
            <Box h='16em' w='40%' mx='auto' overflow='hidden' position='relative'>
                <Image src={imageSrc} position='absolute' />
                <Heading
                    // textAlign='center'
                    mx={2}
                    color={theme.colors.white}
                    zIndex={1}
                    position='relative'
                >
                    {text}
                </Heading>
            </Box>
            <Flex flexWrap='wrap' w='60%' justifyContent='center' alignItems='center'>
                {services.map(service => (
                    <Box w='50%' key={service}>
                        <Text color={theme.colors.white} textAlign='center' fontSize='larger'>
                            {service + ' '}
                            <CheckIcon />
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
};

export default ServiceCard;
