import { useMediaQuery } from '@chakra-ui/media-query';

export const useScreenSize = () => {
    const [tablet] = useMediaQuery('(min-width: 800px)');
    const [monitor] = useMediaQuery('(min-width: 1200px)');

    if (monitor) {
        return 'monitor';
    }
    if (tablet) {
        return 'tablet';
    }
    return 'phone';
};
