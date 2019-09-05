import React from 'react';
import propTypes from 'prop-types';

const RenderText = ({ result }) => {
  const indexOfIt = result.indexOf('It');
  const newResult = result;
  if (indexOfIt !== -1) newResult[indexOfIt] = 'This';
  return (
    <p style={{ marginLeft: '10px' }}>{!Array.isArray(newResult) ? result : newResult.join(' ')}</p>
  );
};

export default RenderText;

RenderText.propTypes = {
  result: propTypes.array,
};

RenderText.defaultProps = {
  result: [],
};
