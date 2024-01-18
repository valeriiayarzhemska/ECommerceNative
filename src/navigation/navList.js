import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';
import { Catalog } from '../screens/Catalog';
import { ProductDetails } from '../screens/ProductDetails';

import { CartIcon, HeartIcon, HomeIcon, UserIcon } from '../assets/icons';
import { Cart } from '../screens/Cart';
import { WishList } from '../screens/WishList';
import { Checkout } from '../screens/Checkout';
import { Profile } from '../screens/Profile';

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
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarIcon: ({ color, size }) => <UserIcon width={size} height={size} color={color} />,
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
  {
    name: 'Checkout',
    component: Checkout,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
];
