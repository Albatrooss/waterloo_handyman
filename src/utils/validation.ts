import * as Yup from 'yup';

export const quoteSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name must be at least 3 characters').max(100, 'Name too long'),
    phoneNumber: Yup.string().matches(
        /^(\(\d{3}\)|\d{3})[-\s]?\d{3}-?\d{4}$/,
        'Phone number is not valid'
    ),
    email: Yup.string().matches(/^\S+@\S+\.\S+$/, 'Email is not valid'),
    description: Yup.string()
        .min(10, 'Description too short, please provide more details')
        .max(200, 'Description too long, please use less than 200 characters'),
});
