import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';
import { Catalog } from '../screens/Catalog';

import {
  HomeIcon,
} from '../assets/icons';

export const tabScreenData = [
  {
    name: 'Catalog',
    component: Catalog,
    options: {
      tabBarIcon: ({ color, size }) => <HomeIcon color={color} />,
    },
  },
  {
    name: 'Login',
    component: Login,
    options: {
      tabBarIcon: ({ color, size }) => <HomeIcon color={color} />,
    },
  },
  {
    name: 'Registration',
    component: Registration,
    options: {
      tabBarIcon: ({ color, size }) => <HomeIcon color={color} />,
    },
  },
];

export const stackScreenData = [
  {
    name: 'Catalog',
    component: Catalog,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
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
];
