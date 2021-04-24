import React from 'react';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { useLoginMutation, useMeQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { Text } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import { Flex, Button, Box, Link } from '@chakra-ui/react';
import { toErrorMap } from '../utils/toErrorMap';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

const login = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    return (
        <Wrapper variant='sm'>
            <Text>Login</Text>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await login(values);
                    if (response.data?.login.errors) {
                        setErrors(toErrorMap(response.data.login.errors));
                    } else if (response.data?.login.user) {
                        router.push('/admin');
                    }
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <InputField name='username' placeholder='Username' label='Username' />
                        <InputField
                            name='password'
                            placeholder='Password'
                            label='Password'
                            type='password'
                            mt={4}
                        />
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Button
                                mt={4}
                                isLoading={isSubmitting}
                                type='submit'
                                colorScheme='telegram'
                            >
                                Login
                            </Button>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default withUrqlClient(createUrqlClient)(login);
