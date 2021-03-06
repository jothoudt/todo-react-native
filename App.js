// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View} from 'react-native';
import AddTask from './components/AddTask/AddTask';
import Title from './components/Title/Title';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducer/_root.reducer';
import rootSaga from './redux/saga/_root.saga';
import createSagaMiddleware from 'redux-saga';
import Home from './components/Home/Home';

const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();

const middlewareList= process.env.NODE_ENV === 'development' ?
[sagaMiddleware, logger] :
[sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
)

sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
    
  );
}

