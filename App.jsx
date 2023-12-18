import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigator } from './src/navigation';
import { persistor, store } from './src/store/redux/store';

import './src/i18n';
import { useGetUsersQuery } from './src/store/redux/services/user/userApi';

function App() {
  /* const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  const onBeforeLift = () => {
    const userToken = store.getState().token;

    setIsUserLoggedIn(userToken !== false);
  }; */

  return (
    <SafeAreaProvider
      style={{ flex: 1, height: '100%', backgroundColor: '#fff' }}
    >
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          //</Provider>onBeforeLift={onBeforeLift}
        >
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
