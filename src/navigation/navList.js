import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';

export const stackScreenData = [
  {
    name: 'Login',
    component: Login,
    //isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    name: 'Registration',
    component: Registration,
    //isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
];
