import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'

import Routes from './src/routes';
import store from './src/store';


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor='#312e38'/>
      <Routes/>
    </Provider>
  );
}
