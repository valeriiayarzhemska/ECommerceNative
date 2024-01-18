import { HomeIcon, UserIcon } from '../../assets/icons';

export const settingsGeneral = [
  {
    id: 1,
    name: 'editProfile',
    goTo: '',
    icon: UserIcon,
    isModal: false,
    isRed: false,
  },
  {
    id: 2,
    name: 'editDeliveryAddress',
    goTo: '',
    icon: HomeIcon,
    isModal: false,
    isRed: false,
  },
];

const settingsSystem = [
  {
    id: 1,
    name: 'changeLanguage',
    goTo: '',
    icon: UserIcon,
    isModal: false,
    isRed: false,
  },
];

export const settingsRed = [
  {
    id: 1,
    name: 'logout',
    goTo: '',
    icon: HomeIcon,
    isModal: true,
    isRed: true,
  },
  {
    id: 2,
    name: 'removeAccount',
    goTo: '',
    icon: HomeIcon,
    isModal: true,
    isRed: true,
  },
];
