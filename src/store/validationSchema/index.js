import * as Yup from 'yup';

export const validationSchema = {
  username: Yup.string().required('inputUsernameRequired'),
  email: Yup.string()
    .email('inputEmailIncorrect')
    .required('inputEmailRequired'),
  password: Yup.string().required('inputPasswordRequired'),
  newPassword: Yup.string().required('inputPasswordRequired'),
  repeatPassword: Yup.string()
    .required('inputPasswordRequired')
    .oneOf([Yup.ref('newPassword')], 'inputPasswordMatch'),
};
