import { Box } from '@chakra-ui/layout';
import React from 'react';
import { WrapperVariant } from '../interfaces';

interface WrapperProps {
    variant?: WrapperVariant;
    mt?: number;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, mt = 0, variant }) => {
    let maxW = '1366px';
    switch (variant) {
        case 'sm':
            maxW = '400px';
            break;
        case 'md':
            maxW = '800px';
            break;
        case 'lg':
            maxW = '1000px';
            break;
    }
    return (
        <Box mt={mt} maxW={maxW} w='90%' mx='auto'>
            {children}
        </Box>
    );
};
