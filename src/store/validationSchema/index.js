import * as Yup from 'yup';

export const validationSchema = {
  username: Yup.string().required('A username is required'),
  email: Yup.string()
    .email('Incorrect email')
    .required('An email is required'),
  password: Yup.string().required('A password is required'),
  newPassword: Yup.string().required('A password is required'),
  repeatPassword: Yup.string()
    .required('A password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match'),
};
