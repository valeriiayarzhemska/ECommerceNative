import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import 'intl';
import IntlPluralRules from 'intl-pluralrules';

if (!Intl.PluralRules) {
  Intl.PluralRules = IntlPluralRules;
}

const resources = {
  en: {
    translations: {
      loginTitle: `Sign in to your account`,
      registrationTitle: `Create your account`,
      emailPlaceholderText: `Enter your email or phone number`,
      passwordPlaceholderText: `Enter your password`,
      repeatPasswordPlaceholderText: `Confirm your password`,
      userPlaceholderText: `Type your username`,
      loginButtonText: `Sign In`,
      registrationButtonText: `Sign Up`,
      inputUsernameRequired: `A username is required`,
      inputEmailIncorrect: `Incorrect email`,
      inputEmailRequired: `An email is required`,
      inputPasswordRequired: `A password is required`,
      inputPasswordMatch: `Passwords do not match`,
      emailInputText: `Enter your email`,
      phoneInputText: `Enter your phone number`,
      passwordInputText: `Enter your password`,
      repeatPasswordInputText: `Confirm your password`,
      userInputText: `Type your username`,
    },
  },
  uk: {
    translations: {
      loginTitle: `Увійдіть в акаунт`,
      registrationTitle: `Створіть свій акаунт`,
      emailPlaceholderText: `Введіть ваші пошту або телефон`,
      passwordPlaceholderText: `Введіть свій пароль`,
      repeatPasswordPlaceholderText: `Повторіть пароль`,
      userPlaceholderText: `Введіть своє ім'я`,
      loginButtonText: `Увійти`,
      registrationButtonText: `Реєстрація`,
      inputUsernameRequired: `Потрібне ім’я користувача`,
      inputEmailIncorrect: `Неправильна електронна адреса`,
      inputEmailRequired: `Потрібна електронна адреса`,
      inputPasswordRequired: `Потрібен пароль`,
      inputPasswordMatch: `Паролі не збігаються`,
      emailInputText: `Введіть свій email`,
      phoneInputText: `Введіть свій номер телефону`,
      passwordInputText: `Введіть свій пароль`,
      repeatPasswordInputText: `Підтвердьте пароль`,
      userInputText: `Введіть своє ім’я користувача`,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'uk'],
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    useSuspense: true,
  },
  initImmediate: false,
});

Promise.all([i18n.loadLanguages('en'), i18n.loadLanguages('uk')]).then(() => {
  i18n.changeLanguage('en');
});

export default i18n;
