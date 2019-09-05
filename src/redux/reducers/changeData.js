const arr = ['It', 'is', 'redux', 'saga', 'test'];

const changeData = (state = [], action) => {
  switch (action.type) {
    case 'SPINNER':
      return 'icon';
    case 'TAKE_DATA':
      return arr;
    default:
      return state;
  }
};

export default changeData;
