import { Heading, Link, Text } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import Layout from '../components/Layout';
import { useQuotesQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import NextLink from 'next/link';

import PhoneLanding from '../components/landing/phone';
import ServiceCard from '../components/ServiceCard';
import { useScreenSize } from '../hooks/useScreenSize';

const Index = () => {
    const screenSize = useScreenSize();

    let landing = null;
    switch (screenSize) {
        case 'phone':
            landing = <PhoneLanding />;
            break;
        default:
            landing = <Text>Hello world</Text>;
    }
    return (
        <>
            <Layout title='Home'>
                {landing}
                <Heading textAlign='center' size='md'>
                    Services include:
                </Heading>
                <ServiceCard
                    text='PLUMBING'
                    imageSrc='https://media.istockphoto.com/photos/plumber-fixing-white-sink-pipe-with-adjustable-wrench-picture-id1150199946?k=6&m=1150199946&s=612x612&w=0&h=gmXBkFjG4Dctt5lZbrPBbOd4xyHcCjhAAFpeDNWrPJY='
                />
                <ServiceCard
                    imageSrc='https://live.staticflickr.com/3201/2591188549_a226e195a7_c.jpg'
                    text='DRYWALL'
                    // right
                />
                <ServiceCard
                    text='PAINT'
                    imageSrc='https://cdn.pixabay.com/photo/2015/09/05/08/12/painting-924144_1280.jpg'
                />
                <ServiceCard
                    text='DOORS'
                    imageSrc='https://i0.hippopx.com/photos/191/48/36/apartment-door-door-handle-door-knob-preview.jpg'
                />
                <NextLink href='/services'>
                    <Text textAlign='center'>
                        Click <Link>here</Link> for a full list of our services
                    </Text>
                </NextLink>
            </Layout>
        </>
    );
};
export default withUrqlClient(createUrqlClient)(Index);
