import {
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
  UserDeleteIcon,
  UserIcon,
} from '../../assets/icons';

export const settingsGeneral = [
  {
    id: 1,
    name: 'editProfile',
    goTo: 'SettingsGeneral',
    icon: UserIcon,
    isNewScreen: true,
    isModal: false,
    isRed: false,
  },
  {
    id: 2,
    name: 'editDeliveryAddress',
    goTo: 'SettingsSystem',
    icon: HomeIcon,
    isNewScreen: true,
    isModal: false,
    isRed: false,
  },
];

export const settingsSystem = [
  {
    id: 1,
    name: 'changeLanguage',
    goTo: '',
    icon: SettingsIcon,
    isNewScreen: false,
    isModal: true,
    isRed: false,
  },
];

export const settingsRed = [
  {
    id: 1,
    name: 'logout',
    goTo: '',
    icon: LogoutIcon,
    isNewScreen: false,
    isModal: true,
    isRed: true,
  },
  {
    id: 2,
    name: 'removeAccount',
    goTo: '',
    icon: UserDeleteIcon,
    isNewScreen: false,
    isModal: true,
    isRed: true,
  },
];
