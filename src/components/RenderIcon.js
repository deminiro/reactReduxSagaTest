import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class RenderIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfDegrees: 0,
      interval: '',
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const { numOfDegrees } = this.state;
      const newDegrees = numOfDegrees + 10;
      this.setState({ numOfDegrees: newDegrees });
    }, 50);

    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { numOfDegrees } = this.state;
    return (
      <FontAwesomeIcon
        icon={faSpinner}
        className="spinner"
        style={{ transform: `rotate(${numOfDegrees}deg)` }}
      />
    );
  }
}

export default RenderIcon;
