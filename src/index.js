import _ from 'lodash';

const sayHello = () => {
	console.log('Hello, Hexlet!');
};

const getLastElement = array => {
	return _.last(array);
};

const addNumbers = (a, b) => {
	const c = a + b;
	return c;
};

export { sayHello, getLastElement, addNumbers };
