import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import { stackScreenData } from './navList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return <div>index</div>;
};

export const AppNavigator = () => {
  /* const language = 'en';

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]); */

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      {stackScreenData.map(screen => {
        /* if (
          (userToken && screen.isAuthorized) ||
          (!userToken && !screen.isAuthorized)
        ) { */
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
        /* }
        return null; */
      })}
    </Stack.Navigator>
  );
};
