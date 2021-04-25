import { Box, Heading, Link, Text, Wrap } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import Layout from '../components/Layout';
import { useQuotesQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import NextLink from 'next/link';

import PhoneLanding from '../components/landing/phone';
import ServiceCard from '../components/ServiceCard';
import { useScreenSize } from '../hooks/useScreenSize';
import DesktopLanding from '../components/landing/desktop';
import theme from '../theme';
import { Wrapper } from '../components/Wrapper';

const Index = () => {
    const screenSize = useScreenSize();

    let landing = null;
    switch (screenSize) {
        case 'phone':
            landing = <PhoneLanding />;
            break;
        default:
            landing = <DesktopLanding />;
    }
    return (
        <>
            <Layout title='Home'>
                {landing}
                <Heading ml={10} size='xl'>
                    SERVICES
                </Heading>
                <Box h={1} w='100%' backgroundColor={theme.colors.grey}></Box>
                <Wrapper>
                    <ServiceCard
                        text='PLUMBING'
                        imageSrc='https://media.istockphoto.com/photos/plumber-fixing-white-sink-pipe-with-adjustable-wrench-picture-id1150199946?k=6&m=1150199946&s=612x612&w=0&h=gmXBkFjG4Dctt5lZbrPBbOd4xyHcCjhAAFpeDNWrPJY='
                        services={[
                            'Water leak repair',
                            'Sinks',
                            'Vanities',
                            'Showers',
                            'Toilets',
                            'Faucets',
                        ]}
                    />
                    <ServiceCard
                        imageSrc='https://live.staticflickr.com/3201/2591188549_a226e195a7_c.jpg'
                        text='DRYWALL'
                        services={['Water damage', 'Physical damage']}
                        right
                    />
                    <ServiceCard
                        text='PAINT'
                        imageSrc='https://cdn.pixabay.com/photo/2015/09/05/08/12/painting-924144_1280.jpg'
                        services={['All area of the home', 'Repair to California ceilings']}
                    />
                    <ServiceCard
                        text='DOORS'
                        imageSrc='https://i0.hippopx.com/photos/191/48/36/apartment-door-door-handle-door-knob-preview.jpg'
                        services={['Interior doors', 'Closets', 'Hardware', 'Locks']}
                        right
                    />
                </Wrapper>
                <NextLink href='/services'>
                    <Text textAlign='center'>
                        Click <Link>here</Link> for a full list of our services
                    </Text>
                </NextLink>
            </Layout>
        </>
    );
};
export default Index;
