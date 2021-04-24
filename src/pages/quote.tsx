import React from 'react'
import { useScreenSize } from '../hooks/useScreenSize';

interface Props {

}

const quote = ({}: Props) => {
    const screenSize = useScreenSize();
    if (screenSize === 'phone') return (

    );
    
    if (screenSize === 'tablet') return (
        
    );
    return (
        
    );
}

export default quote;