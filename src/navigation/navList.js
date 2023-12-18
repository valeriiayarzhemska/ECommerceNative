import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';
import { Catalog } from '../screens/Catalog';
import { ProductDetails } from '../screens/ProductDetails';

import {
  CartIcon,
  HeartIcon,
  HomeIcon,
} from '../assets/icons';
import { Cart } from '../screens/Cart';
import { WishList } from '../screens/WishList';

export const tabScreenData = [
  {
    name: 'Catalog',
    component: Catalog,
    options: {
      tabBarIcon: ({ color, size }) => <HomeIcon color={color} />,
    },
  },
  {
    name: 'WishList',
    component: WishList,
    options: {
      tabBarIcon: ({ color, size }) => <HeartIcon color={color} />,
    },
  },
  {
    name: 'Cart',
    component: Cart,
    options: {
      tabBarIcon: ({ color, size }) => <CartIcon color={color} />,
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
  {
    name: 'ProductDetails',
    component: ProductDetails,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
];
