import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { Wrapper } from '../components/Wrapper';
import { useScreenSize } from '../hooks/useScreenSize';
import theme from '../theme';
import { CheckIcon } from '@chakra-ui/icons';

interface Props {}

const services = ({}: Props) => {
    const screenSize = useScreenSize();
    return (
        <Layout title='Services'>
            <Wrapper>
                <Heading textAlign='center'>Services</Heading>
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
                {screenSize !== 'phone' ? null : (
                    <Flex flexWrap='wrap' w='100%' justifyContent='center' alignItems='center'>
                        {[
                            'Water leak repair',
                            'Sinks',
                            'Vanities',
                            'Showers',
                            'Toilets',
                            'Faucets',
                        ].map(service => (
                            <Box w='50%' key={service}>
                                <Text
                                    color={theme.colors.black}
                                    textAlign='center'
                                    // fontSize='larger'
                                >
                                    {service + ' '}
                                    <CheckIcon />
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                )}
                <ServiceCard
                    imageSrc='https://live.staticflickr.com/3201/2591188549_a226e195a7_c.jpg'
                    text='DRYWALL'
                    right
                    services={['Repairs due to water damage or physical damage']}
                />
                {screenSize !== 'phone' ? null : (
                    <Flex flexWrap='wrap' w='100%' justifyContent='center' alignItems='center'>
                        {['Repairs due to water damage or physical damage'].map(service => (
                            <Box w='50%' key={service}>
                                <Text
                                    color={theme.colors.black}
                                    textAlign='center'
                                    // fontSize='larger'
                                >
                                    {service + ' '}
                                    <CheckIcon />
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                )}
                <ServiceCard
                    text='PAINT'
                    imageSrc='https://cdn.pixabay.com/photo/2015/09/05/08/12/painting-924144_1280.jpg'
                    services={['All area of the home', 'Repair to California ceilings']}
                />
                {screenSize !== 'phone' ? null : (
                    <Flex flexWrap='wrap' w='100%' justifyContent='center' alignItems='center'>
                        {['All area of the home', 'Repair to California ceilings'].map(service => (
                            <Box w='100%' key={service}>
                                <Text
                                    color={theme.colors.black}
                                    textAlign='center'
                                    // fontSize='larger'
                                >
                                    {service + ' '}
                                    <CheckIcon />
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                )}
                <ServiceCard
                    text='DOORS'
                    imageSrc='https://i0.hippopx.com/photos/191/48/36/apartment-door-door-handle-door-knob-preview.jpg'
                    right
                    services={['Interior doors', 'Closets', 'Hardware', 'Locks']}
                />
                {screenSize !== 'phone' ? null : (
                    <Flex flexWrap='wrap' w='100%' justifyContent='center' alignItems='center'>
                        {['Interior doors', 'Closets', 'Hardware', 'Locks'].map(service => (
                            <Box w='50%' key={service}>
                                <Text
                                    color={theme.colors.black}
                                    textAlign='center'
                                    // fontSize='larger'
                                >
                                    {service + ' '}
                                    <CheckIcon />
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                )}
                <ServiceCard
                    text='APPLIANCE INSTALLATION'
                    imageSrc='/appliance.png'
                    services={['Over the Range', 'Dishwashers', 'Water Softeners', 'Washer/Dryer']}
                />
                {screenSize !== 'phone' ? null : (
                    <Flex flexWrap='wrap' w='100%' justifyContent='center' alignItems='center'>
                        {['Dishwashers', 'Water Softeners', 'Washer/Dryer'].map(service => (
                            <Box w='50%' key={service}>
                                <Text
                                    color={theme.colors.black}
                                    textAlign='center'
                                    // fontSize='larger'
                                >
                                    {service + ' '}
                                    <CheckIcon />
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                )}
                <Box h={1} backgroundColor='grey' w='100%' my={8} />
                <Heading textAlign='center' mt={2} size='md'>
                    Other Services Available:
                </Heading>
                <Text textAlign='center' mt={2}>
                    <CheckIcon /> Minor flooring and repair…..sorry no tiling or backsplash.
                </Text>
                <Text textAlign='center' mt={2}>
                    <CheckIcon /> TV Mounts, mirror and wall hanging
                </Text>
                <Text textAlign='center' mt={2}>
                    <CheckIcon /> Curtains and/or Blinds
                </Text>
                <Text textAlign='center' mt={2}>
                    <CheckIcon /> Parging and Brick repair
                </Text>
            </Wrapper>
        </Layout>
    );
};

export default services;
