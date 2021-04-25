import React from 'react';
import { Flex, Box, Heading, Image, Button, Text } from '@chakra-ui/react';
import theme from '../theme';

interface Props {}

const Footer = ({}: Props) => {
    return (
        <Box backgroundColor={theme.colors.grey} mt={4} p={4}>
            hello footer
        </Box>
    );
};

export default Footer;
