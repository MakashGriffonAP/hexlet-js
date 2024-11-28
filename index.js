// file: index.js
import { sayHello, getLastElement, addNumbers } from './src/index.mjs';

sayHello();

// eslint-disable-next-line no-console
console.log(getLastElement(['one', 'two']));

// eslint-disable-next-line no-console
console.log(addNumbers(3, 4)); // Пример вызова функции суммы
