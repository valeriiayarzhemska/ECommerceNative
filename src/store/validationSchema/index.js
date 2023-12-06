import * as Yup from 'yup';

const formatPhoneNumber = value => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  const match = phoneNumber.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
  }

  return value;
};

export const validationSchema = {
  username: Yup.string()
    .required('inputUsernameRequired')
    .min(4, 'inputUsernameMin'),
  phone: Yup.string()
    .required('inputPhoneRequired')
    .matches(/^\+?\d{2} \(\d{3}\) \d{3} \d{2} \d{2}$/, 'inputPhoneInvalid')
    .transform(formatPhoneNumber),
  email: Yup.string()
    .email('inputEmailIncorrect')
    .required('inputEmailRequired'),
  password: Yup.string()
    .required('inputPasswordRequired')
    .min(4, 'inputPasswordMin'),
  newPassword: Yup.string()
    .required('inputPasswordRequired')
    .min(4, 'inputPasswordMin'),
  repeatPassword: Yup.string()
    .required('inputPasswordRequired')
    .oneOf([Yup.ref('newPassword')], 'inputPasswordMatch'),
};
