import { useMediaQuery } from '@chakra-ui/media-query';
import { useEffect, useState } from 'react';

export const useScreenSize = () => {
    const [isMonitor, setIsMonitor] = useState<boolean>(true);
    const [monitor] = useMediaQuery('(min-width: 800px)');

    useEffect(() => {
        if (isMonitor !== monitor) setIsMonitor(monitor);
    }, [monitor]);

    return isMonitor ? 'desktop' : 'phone';
};
