import React from 'react';
import propTypes from 'prop-types';

const RenderText = ({ result }) => (
  <p style={{ marginLeft: '30px' }}>{!Array.isArray(result) ? result : result.join(' ')}</p>
);

export default RenderText;

RenderText.propTypes = {
  result: propTypes.array,
};

RenderText.defaultProps = {
  result: [],
};
