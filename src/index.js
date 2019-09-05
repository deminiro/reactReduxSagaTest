import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { put } from 'redux-saga/effects';

import reducer from './redux/reducers';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

async function delay(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

function* sagaGenerator() {
  yield put({ type: 'SPINNER' });
  yield delay(3000);
  yield put({ type: 'TAKE_DATA' });
}


ReactDOM.render(
  <Provider store={store}>
    <App store={store} sagaMiddleware={sagaMiddleware} sagaGenerator={sagaGenerator} />
  </Provider>,
  document.getElementById('root'),
);
