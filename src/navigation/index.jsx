import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { stackScreenData, tabScreenData } from './navList';
import {
  selectLanguage,
  selectToken,
} from '../store/redux/features/authSelectors';
import { colors } from '../constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.lightGray,
        tabBarActiveTintColor: colors.white,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: colors.darkGray,
          borderTopColor: colors.darkGray,
          elevation: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -30,
        },
      }}
      initialRouteName="Catalog"
    >
      {tabScreenData.map(screen => {
        return (
          <Tab.Screen
            key={screen?.name}
            name={screen?.name}
            component={screen?.component}
            options={screen?.options}
            initialParams={screen?.initialParams}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const { i18n } = useTranslation();
  const userToken = useSelector(selectToken);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (isNavigating && userToken) {
      setIsNavigating(false);
    }
  }, [isNavigating, userToken]);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      setIsNavigating(true);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      {userToken && <Stack.Screen name="Main" component={MainTabNavigator} />}

      {stackScreenData.map(screen => {
        if (
          (userToken && screen.isAuthorized) ||
          (!userToken && !screen.isAuthorized)
        ) {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          );
        }
        return null;
      })}
    </Stack.Navigator>
  );
};
