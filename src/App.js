import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import { Loading } from './components';
import mystore from './redux/mystore';
import Router from './router';

const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={mystore}>
      <MainApp />
    </Provider>
  )
};

export default App;