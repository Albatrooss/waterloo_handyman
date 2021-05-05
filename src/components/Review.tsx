import { CheckIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import theme from '../theme';

interface Props {
    stars: number;
    title: string;
    text: string;
    right?: boolean;
}

const Review = ({ stars, title, text, right }: Props) => {
    let starEls = [];
    for (let i = 0; i < stars; i++) {
        starEls.push(<StarIcon key={i} />);
    }
    return (
        <Box w='90%' mx='auto' my={10}>
            <Box textAlign={right ? 'right' : 'left'}>{starEls}</Box>
            <Heading textAlign={right ? 'right' : 'left'}>{title}</Heading>
            <Text textAlign={right ? 'right' : 'left'}>{text}</Text>
            <Text textAlign='right'>
                <CheckIcon /> Yes, I recommend the Local Pro
            </Text>
            <Box h={0.5} w='100%' backgroundColor={theme.colors.grey}></Box>
        </Box>
    );
};

export default Review;
