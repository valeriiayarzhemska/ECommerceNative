import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';
import { Catalog } from '../screens/Catalog';
import { ProductDetails } from '../screens/ProductDetails';
import { Cart } from '../screens/Cart';
import { WishList } from '../screens/WishList';
import { Checkout } from '../screens/Checkout';
import { Profile } from '../screens/Profile';
import { EditProfile } from '../screens/EditProfile';
import { EditAddress } from '../screens/EditAddress';

import { CartIcon, HeartIcon, HomeIcon, UserIcon } from '../assets/icons';

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
      tabBarIcon: ({ color, size }) => (
        <UserIcon width={size} height={size} color={color} />
      ),
    },
  },
  {
    name: 'ProductDetails',
    component: ProductDetails,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarButton: () => null,
    },
  },
  {
    name: 'Checkout',
    component: Checkout,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarButton: () => null,
    },
  },
  {
    name: 'EditProfile',
    component: EditProfile,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarButton: () => null,
    },
  },
  {
    name: 'EditAddress',
    component: EditAddress,
    options: {
      tabBarStyle: { display: 'none' },
      tabBarButton: () => null,
    },
  },
];

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
];
