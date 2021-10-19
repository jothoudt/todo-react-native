import React from 'react';
import { AppRegistry } from 'react-native';
import {name as appName} from './app.json'
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducer/_root.reducer';
import rootSaga from './redux/saga/_root.saga';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const middlewareList= process.env.NODE_ENV === 'development' ?
[sagaMiddleware, logger] :
[sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
)

sagaMiddleware.run(rootSaga)


const ReactNativeTodo = () =>
  <Provider store={store}>
    <App />
  </Provider>
  
  AppRegistry.registerComponent(appName, () => ReactNativeTodo)




