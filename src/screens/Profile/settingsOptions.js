import {
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
  UserDeleteIcon,
  UserIcon,
} from '../../assets/icons';
import { langRadioButtons } from '../../i18n';

export const settingsGeneral = [
  {
    id: 1,
    name: 'editProfile',
    goTo: 'EditProfile',
    icon: UserIcon,
    isNewScreen: true,
    isModal: false,
    isRed: false,
  },
  {
    id: 2,
    name: 'editDeliveryAddress',
    goTo: 'EditAddress',
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
    title: 'chooseLang',
    icon: SettingsIcon,
    isNewScreen: false,
    isModal: true,
    isRed: false,
    isRadioButtons: true,
    radioButtons: langRadioButtons,
  },
];

export const settingsRed = [
  {
    id: 1,
    name: 'logout',
    goTo: '',
    title: 'wantLogOut',
    icon: LogoutIcon,
    isNewScreen: false,
    isModal: true,
    isRed: true,
  },
  {
    id: 2,
    name: 'removeAccount',
    goTo: '',
    title: 'wantRemoveAccount',
    icon: UserDeleteIcon,
    isNewScreen: false,
    isModal: true,
    isRed: true,
  },
];
