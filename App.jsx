import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/i18n';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  const onBeforeLift = () => {
    const userToken = store.getState().auth.token;

    setIsUserLoggedIn(userToken !== false);
  };

  return (
    <SafeAreaProvider
      style={{ flex: 1, height: '100%', backgroundColor: '#fff' }}
    >
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={onBeforeLift}
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
