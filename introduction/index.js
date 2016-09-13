const _ = require('./functons-on-collections');
const operations = require('./operations');
const predicates = require('./predicates');
const numbers = [2, 3, -1, -6, 0, -108, 42, 10];
const letters = ['a', 'b', 'c', 'd', 'e'];

_.forEach(numbers, operations.print);
_.forEach(_.map(numbers, operations.pow(10)), operations.print);
operations.print(_.contains(numbers, -6));
operations.print(numbers);

const result = _.cat([1, 2, 3], [4, 5], [6, 7, 8]);
operations.print(result);