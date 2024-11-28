import _ from 'lodash';

const sayHello = () => {
  // console.log('Hello, Hexlet!'); // eslint-disable-next-line no-console
};

const getLastElement = (array) => _.last(array);

const addNumbers = (a, b) => {
  const c = a + b;
  return c;
};

export { sayHello, getLastElement, addNumbers };
