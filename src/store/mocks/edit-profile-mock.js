import {
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
} from '../../assets/icons';

export const mock = [
  {
    id: 1,
    placeholder: 'userInputName',
    keyboardType: 'default',
    secureTextEntry: false,
    name: 'firstName',
  },
  {
    id: 2,
    placeholder: 'userInputLastName',
    keyboardType: 'default',
    secureTextEntry: false,
    name: 'lastName',
  },
  {
    id: 3,
    placeholder: 'emailInputText',
    icon: EmailIcon,
    keyboardType: 'default',
    secureTextEntry: false,
    name: 'email',
  },
  {
    id: 4,
    placeholder: 'phoneInputText',
    icon: PhoneIcon,
    keyboardType: 'numeric',
    secureTextEntry: false,
    name: 'phone',
  },
  {
    id: 5,
    placeholder: 'passwordInputText',
    icon: PasswordIcon,
    keyboardType: 'default',
    secureTextEntry: true,
    name: 'newPassword',
  },
  {
    id: 6,
    placeholder: 'repeatPasswordInputText',
    icon: PasswordIcon,
    keyboardType: 'default',
    secureTextEntry: true,
    name: 'repeatPassword',
  },
];
