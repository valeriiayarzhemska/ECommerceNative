import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';
import { Catalog } from '../screens/Catalog';

export const stackScreenData = [
  {
    name: 'Login',
    component: Login,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    name: 'Registration',
    component: Registration,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    name: 'Catalog',
    component: Catalog,
    isAuthorized: true,
    options: {
      headerShown: true,
      animation: 'none',
    },
  },
];
