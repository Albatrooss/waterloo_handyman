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

interface Props {
    submitForm: () => void;
}

const QuoteForm = ({ submitForm }: Props) => {
    const screenSize = useScreenSize();
    const [, createQuote] = useCreateQuoteMutation();

    return (
        <Wrapper variant='md'>
            <Box>
                <Formik
                    initialValues={{
                        name: '',
                        phoneNumber: '',
                        email: '',
                        description: '',
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await createQuote(values);
                        if (response.data?.createQuote.errors) {
                            setErrors(toErrorMap(response.data.createQuote.errors));
                            return;
                        }
                        submitForm();
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
                            <Button
                                mt={4}
                                w={screenSize === 'phone' ? '100%' : 'auto'}
                                px={10}
                                mx='auto'
                                display='block'
                                isLoading={isSubmitting}
                                type='submit'
                                colorScheme='telegram'
                            >
                                Request Quote
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Wrapper>
    );
};

export default QuoteForm;
