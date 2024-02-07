import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import 'intl';
import IntlPluralRules from 'intl-pluralrules';
import { sortOptionsValues } from './constants';

if (!Intl.PluralRules) {
  Intl.PluralRules = IntlPluralRules;
}

const resources = {
  en: {
    translations: {
      englishLang: 'English',
      ukLang: 'Ukrainian',
      loginTitle: `Sign in to your account`,
      registrationTitle: `Create your account`,
      emailPlaceholderText: `Enter your email or phone number`,
      passwordPlaceholderText: `Enter your password`,
      repeatPasswordPlaceholderText: `Confirm your password`,
      userPlaceholderText: `Type your username`,
      loginButtonText: `Sign In`,
      registrationButtonText: `Sign Up`,
      saveText: `Save`,
      inputUsernameRequired: `A username is required`,
      inputUserFirstNameRequired: `A first name is required`,
      inputUserLastNameRequired: `A last name is required`,
      inputUsernameMin: `An username must be at least 4 characters`,
      inputEmailIncorrect: `Incorrect email`,
      inputEmailRequired: `An email is required`,
      inputPhoneInvalid: `A phone number is invalid`,
      inputPhoneRequired: `A phone number is required`,
      inputPasswordRequired: `A password is required`,
      inputPasswordMatch: `Passwords do not match`,
      inputPasswordMin: `A password must be at least 4 characters`,
      emailInputText: `Enter your email`,
      phoneInputText: `Enter your phone number`,
      passwordInputText: `Enter your password`,
      repeatPasswordInputText: `Confirm your password`,
      account: `Account`,
      userInputText: `Type your username`,
      userInputName: `First name`,
      userInputLastName: `Last name`,
      userInputCountry: `Country`,
      userInputState: `State`,
      userInputCity: `City`,
      userInputStreet: `Street`,
      userInputZipcode: `Zipcode`,
      wrongCredential: `Wrong credentials`,
      inputCountryRequired: `You must choose country`,
      inputStateRequired: `You must choose state`,
      inputCityRequired: `You must choose city`,
      inputStreetRequired: `You must type your street`,
      errorWentWrong: `Something went wront, try again`,
      userDataTitle: `Use these credentials for login`,
      buttonContinue: `Continue`,
      buttonCancel: `Close`,
      placeholderTitle: `No Items Available`,
      placeholderText: `Please check back later`,
      addToCart: `Add to cart`,
      buyNow: `Buy now`,
      totalPrice: `Total:`,
      quantityProduct: `Quantity:`,
      checkOut: `Checkout`,
      titleCartList: `Cart`,
      titleWishList: `Wishlist`,
      emptyWishList: `Wishlist is empty`,
      emptyCartList: `Cart is empty`,
      emptyProductsList: `Product list is empty`,
      searchInputText: `What are you searching for?`,
      sortText: `Sort:`,
      sortPopularity: `Most popular`,
      sortLowHigh: `Price: low - high`,
      sortHighLow: `Price: high - low`,
      sortPopularity: sortOptionsValues.sortPopularityEn,
      sortLowHigh: sortOptionsValues.sortLowHighEn,
      sortHighLow: sortOptionsValues.sortHighLowEn,
      delivery: `Delivery`,
      deliveryAddress: `Delivery Address`,
      deliveryFee: `Delivery Fee:`,
      editAddress: `Edit Address`,
      pickUp: `Pick Up`,
      paymentSum: `Payment Summary`,
      cash: `Cash`,
      order: `Your order`,
      selectCountry: `Select country`,
      selectState: `Select state`,
      selectCity: `Select city`,
      permissionGeo: `You must grant permission to use the geolocation`,
      showMap: `Show map`,
      hideMap: `Hide map`,
      youText: `You`,
      goToSettings: 'Go to settings',
      receiver: 'Receiver: ',
      pickupAddress: 'PickUp address: ',
      companyAddress: 'Khmelnitskyi, street Proskurivska',
      succesOrder: `You will make an order`,
      contactYou: `And we will contact you soon!`,
      editProfile: `Edit account`,
      editDeliveryAddress: `Edit address`,
      changeLanguage: `Change language`,
      logout: `Logout`,
      removeAccount: `Remove account`,
      settingsGeneral: `General`,
      settingsSystem: `System`,
      chooseLang: `Choose your language`,
      wantLogOut: `Do you want to logout?`,
      wantRemoveAccount: `Do you want to remove your account?`,
      okText: `Ok`,
    },
  },
  uk: {
    translations: {
      englishLang: 'Англійська',
      ukLang: 'Українська',
      loginTitle: `Увійдіть в акаунт`,
      registrationTitle: `Створіть свій акаунт`,
      emailPlaceholderText: `Введіть ваші пошту або телефон`,
      passwordPlaceholderText: `Введіть свій пароль`,
      repeatPasswordPlaceholderText: `Повторіть пароль`,
      userPlaceholderText: `Введіть своє ім'я`,
      loginButtonText: `Увійти`,
      registrationButtonText: `Реєстрація`,
      saveText: `Зберегти`,
      inputUsernameRequired: `Потрібне ім’я користувача`,
      inputUserFirstNameRequired: `Ім'я обов'язкове`,
      inputUserLastNameRequired: `Прізвище  обов'язкове`,
      inputUsernameMin: `Ім'я користувача повинно містити принаймні 4 символи`,
      inputEmailIncorrect: `Неправильна електронна адреса`,
      inputEmailRequired: `Потрібна електронна адреса`,
      inputPhoneInvalid: `Номер телефону є недійсним`,
      inputPhoneRequired: `Введення номеру телефону є обов'язковим`,
      inputPasswordRequired: `Потрібен пароль`,
      inputPasswordMatch: `Паролі не збігаються`,
      inputPasswordMin: `Пароль повинен містити принаймні 4 символиии`,
      emailInputText: `Введіть свій email`,
      phoneInputText: `Введіть свій номер телефону`,
      passwordInputText: `Введіть свій пароль`,
      repeatPasswordInputText: `Підтвердьте пароль`,
      account: `Акаунт`,
      userInputText: `Введіть своє ім’я користувача`,
      userInputName: `Ім'я`,
      userInputLastName: `Прізвище`,
      userInputCountry: `Країна`,
      userInputState: `Область`,
      userInputCity: `Місто`,
      userInputStreet: `Вулиця`,
      userInputZipcode: `Індекс`,
      wrongCredential: `Неправильні облікові дані`,
      inputCountryRequired: `Ви повинні вибрати країну`,
      inputStateRequired: `Ви повинні вибрати район`,
      inputCityRequired: `Ви повинні вибрати місто`,
      inputStreetRequired: `Ви повинні вказати свою вулицю`,
      errorWentWrong: `Щось пішло не так, спробуйте ще раз`,
      userDataTitle: `Використовуйте ці дані для входу`,
      buttonContinue: `Продовжити`,
      buttonCancel: `Відміна`,
      placeholderTitle: `Немає доступних товарів`,
      placeholderText: `Перевірте пізніше`,
      addToCart: `У кошик`,
      buyNow: `Придбати зараз`,
      titleCartList: `Корзина`,
      totalPrice: `Усього:`,
      quantityProduct: `Кількість:`,
      checkOut: `Оформити`,
      titleWishList: `Вішлист`,
      emptyWishList: `Вішлист пустий`,
      emptyCartList: `Корзина пуста`,
      emptyProductsList: `Продуктовий лист пустий`,
      searchInputText: `Що ви шукаєте?`,
      sortText: `Сортувати:`,
      sortPopularity: sortOptionsValues.sortPopularityUa,
      sortLowHigh: sortOptionsValues.sortLowHighUa,
      sortHighLow: sortOptionsValues.sortHighLowUa,
      delivery: `Доставка`,
      deliveryAddress: `Адреса доставки`,
      deliveryFee: `Доставка:`,
      editAddress: `Редагувати адресу`,
      pickUp: `Забрати`,
      paymentSum: `Ваше замовлення`,
      cash: `Готівка`,
      order: `Ваше замовлення`,
      selectCountry: `Вибрати країну`,
      selectState: `Вибрати регіон`,
      selectCity: `Вибрати місто`,
      permissionGeo: `Ви повинні надати доступ, щоб використовувати геолокацію`,
      showMap: `Показати карту`,
      hideMap: `Сховати карту`,
      youText: `Ви`,
      goToSettings: `Перейти в налаштування`,
      receiver: `Отримувач: `,
      pickupAddress: `Адреса видачі: `,
      companyAddress: `м. Хмельницький, вул. Проскурівська`,
      succesOrder: `Ви зробите замовлення`,
      contactYou: `І ми скоро зв'яжемось з вами!`,
      editProfile: `Відредагувати акаунт`,
      editDeliveryAddress: `Відредагувати адресу`,
      changeLanguage: `Змінити мову`,
      logout: `Вийти з акаунту`,
      removeAccount: `Видалити акаунт`,
      settingsGeneral: `Загальні`,
      settingsSystem: `Системні`,
      chooseLang: `Виберіть мову`,
      wantLogOut: `Ви хочете вийти з акаунту?`,
      wantRemoveAccount: `Ви хочете видалити акаунт?`,
      okText: `Ок`,
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

export const langRadioButtons = [
  {
    id: 'en',
    label: 'englishLang',
    value: 'en',
  },
  {
    id: 'uk',
    label: 'ukLang',
    value: 'uk',
  },
];

export default i18n;
