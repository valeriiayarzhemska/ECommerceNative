import { EmailIcon, PasswordIcon, UserIcon, PhoneIcon } from '../../assets/icons';

export const mock = [
  {
    id: 1,
    placeholder: 'userInputText',
    icon: UserIcon,
    keyboardType: 'default',
    secureTextEntry: false,
    name: 'username',
  },
  {
    id: 2,
    placeholder: 'emailInputText',
    icon: EmailIcon,
    keyboardType: 'default',
    secureTextEntry: false,
    name: 'email',
  },
  {
    id: 3,
    placeholder: 'phoneInputText',
    icon: PhoneIcon,
    keyboardType: 'default',
    secureTextEntry: false,
    name: 'phone',
  },
  {
    id: 4,
    placeholder: 'passwordInputText',
    icon: PasswordIcon,
    keyboardType: 'default',
    secureTextEntry: true,
    name: 'newPassword',
  },
  {
    id: 5,
    placeholder: 'repeatPasswordInputText',
    icon: PasswordIcon,
    keyboardType: 'default',
    secureTextEntry: true,
    name: 'repeatPassword',
  },
];
