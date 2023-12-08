import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { stackScreenData } from './navList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return <div>index</div>;
};

export const AppNavigator = () => {
  const { i18n } = useTranslation();
  const userToken = useSelector(state => state.token);
  const language = useSelector(state => state.lang);
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
