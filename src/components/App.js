/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import action from '../redux/actions';

import RenderText from './RenderText';
import RenderIcon from './RenderIcon';

import './style.css';


const App = ({ store, sagaMiddleware, sagaGenerator }) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  dispatch(action());

  function onClickChange() {
    if (result !== 'icon') {
      sagaMiddleware.run(sagaGenerator);
      const interval = setInterval(() => {
        const waitArray = store.getState();
        setResult(waitArray.takeData);
        if (Array.isArray(waitArray.takeData)) clearInterval(interval);
      }, 50);
    }
  }

  return (
    <div className="div">
      <button type="button" className="button" onClick={onClickChange}>Take data</button>
      <div>
        {result === 'icon'
          ? <RenderIcon />
          : <RenderText result={result} />}
      </div>
    </div>
  );
};

export default App;

App.propTypes = {
  store: propTypes.object,
  sagaMiddleware: propTypes.func,
  sagaGenerator: propTypes.func,
};

App.defaultProps = {
  store: {},
  sagaMiddleware: () => {},
  sagaGenerator: () => {},
};
