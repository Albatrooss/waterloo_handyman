import { Box, Text } from '@chakra-ui/layout';
import { Flex, Button, FormControl, Input, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { InputField } from './InputField';
import { Wrapper } from './Wrapper';
import { quoteSchema } from '../utils/validation';
import { useCreateQuoteMutation, useQuotesQuery } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useScreenSize } from '../hooks/useScreenSize';
import theme from '../theme';
import { useRouter } from 'next/router';

interface Props {
    submitForm: () => void;
}

const QuoteForm = ({ submitForm }: Props) => {
    const router = useRouter();
    const screenSize = useScreenSize();
    const [, createQuote] = useCreateQuoteMutation();

    return (
        <Wrapper variant='md' mt={4}>
            <Formik
                initialValues={{
                    name: '',
                    phoneNumber: '',
                    email: '',
                    description: '',
                }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await createQuote(values);
                    if (!response.data) {
                        setErrors({
                            description:
                                'Something went wrong. Please try again, or give us a call at (519) 635-7085',
                        });
                        return;
                    }
                    if (response.data?.createQuote.errors) {
                        setErrors(toErrorMap(response.data.createQuote.errors));
                        return;
                    }
                    router.replace('/thanks-for-quote');
                }}
                validationSchema={quoteSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name='name' placeholder='John Doe' label='Name' />
                        <InputField
                            name='email'
                            placeholder='hello@example.ca'
                            label='Email'
                            mt={4}
                        />
                        <InputField
                            name='phoneNumber'
                            placeholder='(123) 456-7890'
                            label='Phone Number'
                            mt={4}
                        />
                        <InputField
                            name='description'
                            placeholder='Tell us about the job..'
                            label='Description'
                            textarea
                            mt={4}
                        />
                        <Text color='GrayText' textAlign='center'>
                            Leave you details and a brief description of the job, and we’ll get back
                            to you as soon as possible.
                        </Text>
                        <Button
                            mt={4}
                            w={screenSize === 'phone' ? '100%' : 'auto'}
                            px={10}
                            mx='auto'
                            display='block'
                            isLoading={isSubmitting}
                            type='submit'
                            backgroundColor={theme.colors.primary}
                            color={theme.colors.white}
                        >
                            Request Quote
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default QuoteForm;
